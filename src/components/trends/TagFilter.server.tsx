import Link from "next/link";
import clsx from "clsx";

export default function TagFiltersServer({
  tags,
  active,
  className,
}: {
  tags: string[];
  active?: string | null;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-row flex-col gap-2 overflow-x-scroll", className)}>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={{ query: { tag } }}
          scroll={false}
          className={clsx(
            "border px-4 py-2 font-bold",
            active === tag
              ? "border-yellow-400 bg-yellow-400 text-black"
              : "border-white bg-black text-white"
          )}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
