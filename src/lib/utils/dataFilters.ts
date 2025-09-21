import type { RapPostCollection } from "@/lib/types";

export const byCategory = (rows: RapPostCollection, cat: string) =>
  rows.filter((r) => r.attributes.category?.includes(cat));

export const byTag = (rows: RapPostCollection, tag: string) =>
  rows.filter((r) => r.attributes.tags?.includes(tag));

export const trending = (rows: RapPostCollection) =>
  rows.filter((r) => r.attributes.trends === true);
