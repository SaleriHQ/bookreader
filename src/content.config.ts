import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const chapters = defineCollection({
    loader: glob({
        base: "./books",
        pattern: "**/*.md",

        generateId: ({ entry }) => {
            return entry
                .replace(/\\/g, "/")
                .replace(/\.md$/, "")
                .replace("/chapters/", "/");
        },
    }),

    schema: z.object({
        title: z.string(),
        order: z.number().int().min(1),
    }),
});

const books = defineCollection({
    loader: glob({
        base: "./books",
        pattern: "*/book.yaml",
        generateId: ({ entry }) => entry
            .replace(/\\/g, "/")
            .replace(/\/book\.yaml$/, ""),
    }),

    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        author: z.string().optional(),
        cover: image(),
    }),
})

export const collections = {
    books,
    chapters,
}
