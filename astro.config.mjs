// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import { unified } from "@astrojs/markdown-remark";

import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkMath from "remark-math";

import rehypeMathJax4 from "./src/markdown/rehype-mathjax4.js";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import remarkBookSyntax from "./src/markdown/remark-book-syntax.js";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],

  markdown: {
    processor: unified({
      remarkPlugins: [remarkGfm, remarkMath, remarkDirective, remarkBookSyntax],
      rehypePlugins: [
        rehypeRaw,
        rehypeMathJax4,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
          },
        ],
      ],
    }),
  },
});
