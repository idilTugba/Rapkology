import Link from "next/link";
import Image from "next/image";
import { fetchPosts } from "@/lib/data";
import type { RapPostCollection } from "@/lib/types";
import BlogSlider from "@/components/sliders/BlogSlider";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/BreadCrumbs";
import ShowAllLink from "@/components/trends/ShowAllLink";
import TagFiltersServer from "@/components/trends/TagFilter.server";
import TrendsServer from "@/components/trends/Trends.Server";
import { TAGS } from "@/constants";

export const revalidate = 0;
export const fetchCache = "force-no-store";

const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v);

type SP = { show?: string | string[]; limit?: string | string[]; tag?: string | string[] };

export default async function BlogPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const rows: RapPostCollection = await fetchPosts({ revalidate: 0, cache: "no-store" });

  // FILTRE
  const activeTag = first(sp.tag) ?? null;
  let filtered: RapPostCollection = rows;
  if (activeTag) {
    filtered = rows.filter((r) => r.attributes.tags?.includes(activeTag));
    if (filtered.length === 0) filtered = rows;
  }

  // LIMIT / SHOW ALL
  const initialLimit = 8;
  const expanded = first(sp.show) === "all";
  const parsedLimit = Number(first(sp.limit) ?? initialLimit);
  const limit = Number.isFinite(parsedLimit) ? parsedLimit : initialLimit;
  const canShowMore = !expanded && filtered.length > limit;

  return (
    <main className="blogPage w-full">
      <div className="blogSlider bg-rkyellow-500 w-full bg-[url(/blog-bg-1.png)]">
        <div className="mx-auto max-w-7xl px-4 py-24">
          <Breadcrumbs className="mb-4" />
          <Title classname="text-rkblack-500 !mb-5 mt-5">BLOG</Title>

          <section className="grid gap-4 md:grid-cols-12">
            <div className="min-w-0 md:col-span-7">
              <BlogSlider rows={rows.slice(0, 5)} />
            </div>

            <div className="md:col-span-5">
              {rows.slice(0, 4).map((post) => (
                <article key={post._id} className="mb-4 grid grid-cols-8 gap-5">
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
                      <p className="text-rkblack-500 mb-3 line-clamp-4 text-xl font-extrabold leading-tight">
                        {post.attributes.desc.toUpperCase()}
                      </p>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="relative top-[-100px] z-50 h-auto min-h-[100px] w-full bg-[url(/vector-bg.png)] bg-cover after:absolute after:left-0 after:top-[100px] after:h-full after:w-full after:bg-[#121212] md:bg-contain"></div>

      <section className="text-white">
        <Title classname="pl-0 lg:pl-20">KEŞFET</Title>

        <div className="mx-0 my-10 lg:m-10">
          <TagFiltersServer tags={TAGS} active={activeTag} />
        </div>

        <TrendsServer data={filtered} expanded={expanded} initialLimit={limit} />

        {canShowMore && (
          <div className="mt-8 flex justify-center">
            <ShowAllLink label="Hepsini Göster" />
          </div>
        )}
      </section>

      <Footer classname="block mx-5 lg:flex justify-between lg:mx-20" />
    </main>
  );
}
