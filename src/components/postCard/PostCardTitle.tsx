import Image from "next/image";
import clsx from "clsx";
import PostCardImage from "./PostCardImage";
import { RapPostDocument } from "@/lib/types";

export default function PostCardTitle({
  post,
  i,
  classname,
  cardType,
}: {
  post: RapPostDocument;
  i: number;
  classname?: string; // "hiddenNumber classı ile sol kısımdaki numarayı gizleyebilirsiniz"
  cardType: "onlyTitle" | "imageAndTitle"; // Büyük resim olacak ise imageAndTitle, sadece başlık ise onlyTitle
}) {
  return (
    <article
      key={post._id}
      className={clsx("relative mb-0 ml-0 min-w-0 pb-5 transition sm:mb-5 lg:ml-10", classname)}
    >
      <div className="postCardTitle border-b-1 mb-5 border-[#4c4c4c] pb-5">
        <span className="font-saria-cond absolute left-[-75px] top-[15px] text-5xl font-extrabold text-[#2a2a2a]">{`0${i + 1}`}</span>
        <div className="mb-5 mt-6 flex items-center gap-2">
          <Image
            src={post.attributes.img}
            alt={post.attributes.seo.metaTitle}
            width={35}
            height={35}
            className="mr-2"
          />
          <h3 className="font-saria-sans text-md line-clamp-2">{post.attributes.authors}</h3>
        </div>
        {cardType === "imageAndTitle" && (
          <PostCardImage
            imageUrl={post.attributes.img}
            date={post.createdAt}
            seo={post.attributes.seo}
            slug={post.attributes.slug}
            cardType="onlyTitle"
          />
        )}
        <p className="font-saria-cond word-spacing-[-2px] line-clamp-3 text-xl font-extrabold leading-[1.2] tracking-tight sm:text-2xl">
          {post.attributes.content.toUpperCase()}
        </p>
      </div>
      <a href={`/blog/${post.attributes.slug}`}>Daha Fazla Oku</a>
    </article>
  );
}
