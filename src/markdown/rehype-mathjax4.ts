import type {
    Element,
    Parent,
    Root,
    RootContent,
} from "hast";

import { fromHtml } from "hast-util-from-html";
import { toText } from "hast-util-to-text";
import { visit } from "unist-util-visit";

import { mathjax } from "@mathjax/src/js/mathjax.js";
import { TeX } from "@mathjax/src/js/input/tex.js";
import { CHTML } from "@mathjax/src/js/output/chtml.js";
import { liteAdaptor } from "@mathjax/src/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "@mathjax/src/js/handlers/html.js";

import "@mathjax/src/js/util/asyncLoad/esm.js";

/*
 * TeX packages.
 *
 * 这里不是 npm package，而是告诉 MathJax
 * 加载哪些 TeX 功能模块。
 */
import "@mathjax/src/js/input/tex/base/BaseConfiguration.js";
import "@mathjax/src/js/input/tex/ams/AmsConfiguration.js";
import "@mathjax/src/js/input/tex/newcommand/NewcommandConfiguration.js";
import "@mathjax/src/js/input/tex/noundefined/NoUndefinedConfiguration.js";


const EM = 16;
const EX = 8;

/*
 * MathJax 用这个值进行断行等尺寸计算。
 *
 * 你的 reader-width 目前是 760px，
 * 所以先与阅读区保持一致。
 */
const CONTAINER_WIDTH = 760;


/*
 * MathJax 的轻量 DOM 实现。
 *
 * 因为 Astro build 运行在 Node.js，
 * 此时没有浏览器的 document / window。
 */
const adaptor = liteAdaptor({
    fontSize: EM,
});

RegisterHTMLHandler(adaptor);


/*
 * TeX 输入解析器。
 */
const tex = new TeX({
    packages: [
        "base",
        "ams",
        "newcommand",
        "noundefined",
    ],

    formatError(_jax, error) {
        throw error;
    },
});


/*
 * CHTML 输出器。
 *
 * 第一阶段先使用 CDN 提供字体。
 *
 * 后面我们可以把 New Computer Modern
 * 字体直接放进 Astro public/ 中，实现完全离线。
 */
const chtml = new CHTML({
    fontURL:
        "https://cdn.jsdelivr.net/npm/@mathjax/mathjax-newcm-font@4.1.3/chtml/woff2",
});


/*
 * MathJax MathDocument。
 */
const mathDocument = mathjax.document("", {
    InputJax: tex,
    OutputJax: chtml,
});


function getClassNames(node: Element): string[] {
    const value = node.properties.className;

    if (Array.isArray(value)) {
        return value.map(String);
    }

    if (typeof value === "string") {
        return value.split(/\s+/);
    }

    return [];
}


function hasClass(
    node: Element,
    className: string,
): boolean {
    return getClassNames(node).includes(className);
}


function isMathCode(
    node: RootContent | undefined,
    type: "inline" | "display",
): node is Element {
    if (
        !node ||
        node.type !== "element" ||
        node.tagName !== "code"
    ) {
        return false;
    }

    return (
        hasClass(node, "language-math") &&
        hasClass(
            node,
            type === "inline"
                ? "math-inline"
                : "math-display",
        )
    );
}


function isLegacyInlineMath(node: Element): boolean {
    return node.tagName === "eq";
}


function mathJaxHtmlToHast(
    html: string,
): RootContent {
    const fragment = fromHtml(html, {
        fragment: true,
    });

    if (fragment.children.length !== 1) {
        throw new Error(
            "MathJax generated an unexpected HTML fragment.",
        );
    }

    return fragment.children[0];
}


async function renderMath(
    source: string,
    display: boolean,
): Promise<RootContent> {
    const output = await mathDocument.convertPromise(source, {
        display,

        em: EM,
        ex: EX,

        containerWidth: CONTAINER_WIDTH,
    });

    const html = adaptor.outerHTML(output);

    return mathJaxHtmlToHast(html);
}


interface MathTarget {
    parent: Parent;
    index: number;

    source: string;
    display: boolean;
}


export default function rehypeMathJax4() {
    return async function transformer(tree: Root) {
        const targets: MathTarget[] = [];


        /*
         * remark-math + remark-rehype 会把：
         *
         *   $x^2$
         *
         * 转换成：
         *
         *   <code class="language-math math-inline">
         *
         *
         * 而：
         *
         *   $$
         *   x^2
         *   $$
         *
         * 会转换成：
         *
         *   <pre>
         *     <code class="language-math math-display">
         *   </pre>
         */
        visit(
            tree,
            "element",
            (
                node: Element,
                index,
                parent,
            ) => {
                if (
                    index === undefined ||
                    parent === undefined
                ) {
                    return;
                }


                /*
                 * 兼容书稿表格中的 <eq>...</eq> 标记。
                 * rehype-raw 会先把原始 HTML 解析成 HAST 元素。
                 */
                if (isLegacyInlineMath(node)) {
                    targets.push({
                        parent,
                        index,
                        source: toText(node),
                        display: false,
                    });

                    return;
                }


                /*
                 * Inline math
                 */
                if (isMathCode(node, "inline")) {
                    targets.push({
                        parent,
                        index,
                        source: toText(node),
                        display: false,
                    });

                    return;
                }


                /*
                 * Display math
                 *
                 * 注意：
                 *
                 * 不能只替换 <code>，
                 * 否则 MathJax 会被留在 <pre> 里面。
                 *
                 * 所以整个 <pre> 都替换掉。
                 */
                if (
                    node.tagName === "pre" &&
                    node.children.length === 1 &&
                    isMathCode(
                        node.children[0],
                        "display",
                    )
                ) {
                    targets.push({
                        parent,
                        index,
                        source: toText(
                            node.children[0],
                        ),
                        display: true,
                    });
                }
            },
        );


        /*
         * MathJax 转换。
         *
         * 每个目标都是 1 → 1 替换，
         * 因此不会改变 parent.children 的长度。
         */
        for (const target of targets) {
            try {
                target.parent.children[target.index] =
                    await renderMath(
                        target.source,
                        target.display,
                    );
            } catch (error) {
                const type =
                    target.display
                        ? "display"
                        : "inline";

                throw new Error(
                    `MathJax failed to render ${type} math:\n\n` +
                    target.source,
                    {
                        cause: error,
                    },
                );
            }
        }


        /*
         * MathJax CHTML 不只是 HTML。
         *
         * 它还需要 MathJax 自己生成的一套 CSS，
         * 包含字体、尺寸、根号、上下标等排版规则。
         */
        if (targets.length > 0) {
            const css = adaptor.cssText(
                chtml.styleSheet(mathDocument),
            );

            const style: Element = {
                type: "element",
                tagName: "style",

                properties: {
                    dataMathjax: "chtml",
                },

                children: [
                    {
                        type: "text",
                        value: css,
                    },
                ],
            };

            tree.children.push(style);
        }
    };
}
