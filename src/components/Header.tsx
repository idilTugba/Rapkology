"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { NAV } from "@/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={
          "border-rkblack-500 fixed top-0 z-[999999] w-full border-b bg-black/70 backdrop-blur-md"
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/rapkology.png" alt="Rapkology Logo" width={236} height={61} priority />
          </Link>

          <nav className="white ml-2 hidden items-center gap-6 text-sm tracking-wide lg:flex">
            {NAV.map((i) => (
              <a key={i.href} href={i.href} className="hover:text-rkyellow-500 transition">
                {i.label}
              </a>
            ))}
            <div className="ml-auto flex items-center gap-3">
              <button
                className="hidden items-center gap-2 px-3 py-1.5 text-sm sm:flex"
                aria-label="Ara"
              >
                <Image
                  src="/icons/search.svg"
                  alt="Search Icon"
                  width={24}
                  height={24}
                  className=""
                />
              </button>
              <a
                href="/login"
                className="text-rkblack-500 hover:text-text-rkyellow-500 bg-white px-6 py-2 text-sm font-semibold"
              >
                Giriş Yap
              </a>
            </div>
          </nav>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex p-2 lg:hidden"
            aria-label="Menüyü aç"
          >
            {open ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#f0e74d">
                <path d="M6 6l12 12M18 6L6 18" stroke="#f0e74d" strokeWidth="5" />
              </svg>
            ) : (
              <span className="icon icon--menu !bg-rkyellow-500 text-5xl"></span>
            )}
          </button>
        </div>
      </header>

      <aside
        className={clsx(
          "fixed inset-0 z-[60] transition lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className={clsx(
            "absolute inset-0 bg-black/60 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={clsx(
            "absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-neutral-900",
            "transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="mt-24 flex flex-col gap-1 p-2">
            {NAV.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="rounded-md px-3 py-3 text-sm hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </a>
            ))}
            <a
              href="/login"
              className="text-rkblack-500 hover:text-text-text-rkyellow-500 mt-[20px] inline-block max-w-[110px] bg-white px-6 py-2 text-sm font-semibold"
            >
              Giriş Yap
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}
