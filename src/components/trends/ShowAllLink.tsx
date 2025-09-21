"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function ShowAllLink({ label = "Hepsini Göster" }) {
  const pathname = usePathname();
  const sp = useSearchParams();
  const query = Object.fromEntries(sp.entries());

  return (
    <Link
      href={{ pathname, query: { ...query, show: "all" } }}
      scroll={false}
      className="relative z-10 inline-block skew-x-[-6deg] bg-white px-6 py-3 font-extrabold text-black"
    >
      {label}
    </Link>
  );
}
