import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchPosts, fetchPostBySlug } from "@/lib/data";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { RapPostCollection } from "@/lib/types";
import Link from "next/link";
import Title from "@/components/Title";
import Breadcrumbs from "@/components/BreadCrumbs";
import PostCardTitle from "@/components/postCard/PostCardTitle";

type Params = { slug: string };

export const revalidate = 300;

// export async function generateStaticParams() {
//   const posts = await fetchPosts();
//   return posts.map((p) => ({ slug: p.attributes.slug }));
// }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return { title: "Bulunamadı" };

  const { metaTitle, metaDescription, canonicalURL } = post.attributes.seo ?? {};
  return {
    title: metaTitle ?? post.attributes.title,
    description: metaDescription ?? post.attributes.desc,
    alternates: { canonical: `/blog/${canonicalURL ?? post.attributes.slug}` },
    openGraph: {
      title: metaTitle ?? post.attributes.title,
      description: metaDescription ?? post.attributes.desc,
      images: [{ url: post.attributes.img }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return notFound();

  const data: RapPostCollection = await fetchPosts({ revalidate: 300 });

  return (
    <main className="mt-20 grid grid-cols-10 gap-10">
      <div className="col-span-10 mx-5 mt-10 md:mx-20 lg:col-span-6">
        <Breadcrumbs className="text-rkblack-500 mb-4" currentLabel={post.attributes.title} />
        <h1 className="mb-4 text-3xl font-extrabold leading-tight">{post.attributes.title}</h1>
        <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-lg">
          <Image
            src={post.attributes.img}
            alt={post.attributes.title}
            fill
            className="object-cover"
          />
        </div>

        <article className="prose prose-invert max-w-none">
          <p>{post.attributes.content}</p>
        </article>
        <div className="mt-5">
          {post.attributes.category.map((cat, i) => (
            <span key={cat + i} className="mr-2 bg-[#323232] p-2 text-xs">
              {cat}
            </span>
          ))}
          {post.attributes.tags.map((tag, i) => (
            <span key={tag + i} className="mr-2 bg-[#323232] p-2 text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <p>
            <span className="icon icon--heart relative top-1 mr-1"></span> <b>145 Kişi</b> beğendi
          </p>
        </div>
        <div className="mt-10">
          <Title classname="mb10">DAHA FAZLA İÇERİK</Title>
          {data.slice(0, 3).map((post) => (
            <article
              key={post._id}
              className="border-b-1 mb-4 grid grid-cols-8 gap-5 border-[#3e3e3e] pb-6 last:border-none"
            >
              <div className="relative col-span-3 w-full">
                <Image
                  src={post.attributes.img}
                  alt={post.attributes.seo.canonicalURL}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-5">
                <Link href={`/blog/${post.attributes.slug}`} className="hover:underline">
                  <p className="mb-3 line-clamp-4 text-xl font-extrabold leading-tight text-white">
                    {post.attributes.desc.toUpperCase()}
                  </p>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Title classname="!mb-4">
            TRENDLER{" "}
            <span className="icon icon--lighting text-rkyellow-500 left-4 top-1 text-5xl"></span>
          </Title>
          <div className="ml-20 grid gap-10 sm:ml-0 lg:grid-cols-2">
            {data.slice(0, 4).map((post, i) => (
              <PostCardTitle key={post._id} post={post} i={i} cardType="onlyTitle" />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-10 mx-5 md:mx-20 lg:col-span-4 lg:mx-0">
        <Footer classname="!mt-10" />
      </div>
    </main>
  );
}
