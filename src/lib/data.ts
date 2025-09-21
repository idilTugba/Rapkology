export type FetchOpts = {
  revalidate?: number;
  cache?: RequestCache;
  nextTags?: string[];
};
import { RapPostCollection } from "./types";

export const DUMMY_URL =
  process.env.NEXT_PUBLIC_DATA_URL ?? "https://dummyjson.com/c/a7c4-016a-47aa-8241";

export async function fetchPosts(opts: FetchOpts = {}) {
  const res = await fetch(DUMMY_URL, {
    cache: opts.cache, // ← eklendi
    next: {
      revalidate: opts.revalidate ?? 300,
      tags: opts.nextTags ?? ["posts"],
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<RapPostCollection>;
}

export async function fetchPostBySlug(slug: string) {
  const posts = await fetchPosts();
  return posts.find((p) => p.attributes.slug === slug);
}
