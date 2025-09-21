"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {
  currentLabel?: string;
  className?: string;
  dictionary?: Record<string, string>;
};

const defaultDict: Record<string, string> = {
  "": "ANA SAYFA",
  blog: "BLOG",
  news: "HABERLER",
  contact: "İLETİŞİM",
};

export default function Breadcrumbs({ currentLabel, className, dictionary = {} }: Props) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const dict = { ...defaultDict, ...dictionary };

  const items = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const isLast = i === segments.length - 1;
    const labelFromSeg =
      dict[seg] ??
      decodeURIComponent(seg)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toLocaleUpperCase("tr-TR"));
    return {
      href,
      label: isLast && currentLabel ? currentLabel : labelFromSeg,
      isLast,
    };
  });

  const withHome = [{ href: "/", label: dict[""], isLast: segments.length === 0 }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={clsx("text-sm text-white/70", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {withHome.map((item, idx) => (
          <li key={item.href} className="flex items-center gap-2">
            {item.isLast ? (
              <span aria-current="page" className="font-semibold text-white">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            )}
            {idx < withHome.length - 1 && <span className="opacity-60">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
