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
      <div className="ml-20 mt-0 grid gap-10 sm:ml-0 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post, i) => (
          <PostCardTitle key={post._id} post={post} i={i} cardType="onlyTitle" />
        ))}
      </div>
    </div>
  );
}
