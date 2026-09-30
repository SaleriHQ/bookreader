import type { CollectionEntry } from "astro:content";

export type ChapterEntry = CollectionEntry<"chapters">;

export function getBookId(chapter: ChapterEntry) {
    return chapter.id.split("/")[0];
}

export function sortChapters(chapters: ChapterEntry[]) {
    return [...chapters].sort((a, b) =>
        a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
    );
}

export function humanizeBookId(bookId: string) {
    return bookId
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}
