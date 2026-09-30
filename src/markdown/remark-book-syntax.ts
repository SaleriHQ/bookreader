import { visit } from "unist-util-visit";

export default function remarkBookSyntax() {
    return (tree: any, file: any) => {
        const markdownPath = String(file?.path ?? file?.history?.[0] ?? "")
            .replace(/\\/g, "/");
        const bookId = markdownPath.match(/\/books\/([^/]+)\/chapters\//)?.[1];

        visit(tree, "textDirective", (node: any) => {
            if (node.type === "textDirective" && node.name === "word") {
                const data = node.data ?? (node.data = {});
                data.hName = "span";
                data.hProperties = { className: ["book-word"] };
            }
        });

        visit(tree, "text", (node: any, index: number | undefined, parent: any) => {
            if (index === undefined || !parent?.children) return;

            const pattern = /!\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g;
            const value = String(node.value ?? "");
            const children: any[] = [];
            let cursor = 0;
            let match: RegExpExecArray | null;

            while ((match = pattern.exec(value)) !== null) {
                if (match.index > cursor) {
                    children.push({
                        type: "text",
                        value: value.slice(cursor, match.index),
                    });
                }

                const target = match[1]
                    .trim()
                    .replace(/\\/g, "/")
                    .replace(/^assets\//, "");
                const alias = match[2]?.trim();
                const isSize = /^\d+(?:x\d+)?$/i.test(alias ?? "");
                const fileName = target.split("/").at(-1) ?? target;
                const alt = !alias || alias === "image" || isSize
                    ? fileName.replace(/\.[^.]+$/, "")
                    : alias;

                children.push({
                    type: "image",
                    url: bookId
                        ? `/books/${encodeURIComponent(bookId)}/assets/${target
                            .split("/")
                            .map(encodeURIComponent)
                            .join("/")}`
                        : target,
                    title: null,
                    alt,
                    data: isSize
                        ? {
                            hProperties: {
                                width: Number(alias?.split("x")[0]),
                            },
                        }
                        : undefined,
                });

                cursor = match.index + match[0].length;
            }

            if (children.length === 0) return;

            if (cursor < value.length) {
                children.push({
                    type: "text",
                    value: value.slice(cursor),
                });
            }

            parent.children.splice(index, 1, ...children);
            return index + children.length;
        });
    };
}
