import { RapPostDocument } from "@/lib/types";
import PostCardImage from "./PostCardImage";
import PostCardTitle from "./PostCardTitle";

export default function PostCard({
  post,
  i,
  cardType,
  classname,
}: {
  post: RapPostDocument;
  i: number;
  cardType: "imageAndTitle" | "onlyTitle";
  classname?: string;
}) {
  return (
    <div className="flex min-w-0 flex-col justify-between lg:flex-row">
      <PostCardImage
        imageUrl={post.attributes.img}
        seo={post.attributes.seo}
        date={post.createdAt}
        slug={post.attributes.slug}
        cardType={cardType}
      />
      <PostCardTitle classname={classname} post={post} i={i} cardType={cardType} />
    </div>
  );
}
