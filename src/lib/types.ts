// lib/types.ts

type ObjectId = string;
type Slug = string;
type ISODateString = `${number}-${number}-${number}T${string}Z`;
type UrlString = `http${string}`;

export interface SeoMeta {
  metaTitle: string;
  canonicalURL: Slug | UrlString;
  metaDescription: string;
}

export interface PostAttributes {
  trends: boolean;
  category: string[];
  tags: string[];
  authors: string[];
  title: string;
  slug: Slug;
  content: string;
  seo: SeoMeta;
  desc: string;
  img: UrlString;
}

export interface RapPostDocument {
  _id: ObjectId;
  user_id: ObjectId;
  type: "posts";
  attributes: PostAttributes;
  lang: "tr" | string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  __v: number;
}

export type RapPostCollection = RapPostDocument[];
