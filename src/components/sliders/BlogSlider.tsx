"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import type { RapPostCollection } from "@/lib/types";

export default function BlogSlider({ rows }: { rows: RapPostCollection }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="rounded-lg"
    >
      {rows.map((post) => (
        <SwiperSlide key={post._id}>
          <Link
            href={`/blog/${post.attributes.slug}`}
            className="group relative block overflow-hidden rounded-lg"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={post.attributes.img}
                alt={post.attributes.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-7 py-6">
              <h2 className="text-3xl font-extrabold leading-tight text-white drop-shadow">
                {post.attributes.title.toUpperCase()}
              </h2>
              <span className="size-14 place-items-center">
                <span className="icon icon--play"></span>
              </span>
            </div>
          </Link>
          <p className="text-rkblack-500 mb-3 mt-4 line-clamp-3 pl-10 pr-28 text-xl font-extrabold leading-tight">
            {post.attributes.content.toUpperCase()}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
