import type { APIRoute } from "astro";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

interface AssetProps {
    filePath: string;
}

async function collectFiles(directory: string): Promise<string[]> {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = await Promise.all(entries.map(async (entry) => {
        const entryPath = path.join(directory, entry.name);
        return entry.isDirectory() ? collectFiles(entryPath) : [entryPath];
    }));

    return files.flat();
}

export async function getStaticPaths() {
    const booksRoot = path.resolve("books");
    const books = await readdir(booksRoot, { withFileTypes: true });
    const paths: Array<{
        params: { bookId: string; asset: string };
        props: AssetProps;
    }> = [];

    for (const book of books) {
        if (!book.isDirectory()) continue;

        const assetsDirectory = path.join(booksRoot, book.name, "assets");

        try {
            const files = await collectFiles(assetsDirectory);

            for (const filePath of files) {
                paths.push({
                    params: {
                        bookId: book.name,
                        asset: path.relative(assetsDirectory, filePath).replace(/\\/g, "/"),
                    },
                    props: { filePath },
                });
            }
        } catch (error: any) {
            if (error?.code !== "ENOENT") throw error;
        }
    }

    return paths;
}

const contentTypes: Record<string, string> = {
    ".avif": "image/avif",
    ".gif": "image/gif",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
};

export const GET: APIRoute<AssetProps> = async ({ props }) => {
    const body = await readFile(props.filePath);
    const contentType = contentTypes[path.extname(props.filePath).toLowerCase()]
        ?? "application/octet-stream";

    return new Response(body, {
        headers: {
            "Cache-Control": "public, max-age=31536000, immutable",
            "Content-Type": contentType,
        },
    });
};
