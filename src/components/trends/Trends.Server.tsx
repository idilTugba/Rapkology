import type { RapPostCollection } from "@/lib/types";
import PostCardTitle from "../postCard/PostCardTitle";

export default function TrendsServer({
  data,
  expanded = false,
  initialLimit = 6,
  className = "",
}: {
  data: RapPostCollection;
  expanded?: boolean;
  initialLimit?: number;
  className?: string;
}) {
  if (!data || data.length === 0) return null;

  const visible = expanded ? data : data.slice(0, initialLimit);

  return (
    <div className={className}>
      <div className="mt-0 grid gap-10 sm:mt-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {visible.map((post, i) => (
          <PostCardTitle
            key={post._id}
            post={post}
            i={i}
            cardType="imageAndTitle"
            classname="hiddenNumber"
          />
        ))}
      </div>
    </div>
  );
}
