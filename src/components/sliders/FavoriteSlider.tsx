"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { FavItem } from "../home/Section4";

export default function FavoritesSlider({ items }: { items?: FavItem[] | undefined }) {
  return (
    <div className="favorites-slider-container mb-[75px] ml-[10%] w-[90%] sm:ml-0 sm:w-[60%]">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, FreeMode]}
        navigation
        freeMode={false}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 16 },
          640: { slidesPerView: 1.2, spaceBetween: 20 },
          768: { slidesPerView: 1.6, spaceBetween: 24 },
          1024: { slidesPerView: 2.2, spaceBetween: 28 },
          1280: { slidesPerView: 2.6, spaceBetween: 32 },
        }}
        scrollbar={{ draggable: true }}
        className="favorites-swiper"
      >
        {items &&
          items.map((it) => (
            <SwiperSlide key={it.id} className="!h-auto">
              <article className="relative box-border flex h-[380px] flex-col items-center gap-8 overflow-hidden rounded bg-[url(/slider_vector.png)] bg-contain bg-[center_bottom_10px] bg-no-repeat pb-0 pt-0 pt-10 align-middle before:absolute before:inset-1 before:left-0 before:-z-10 before:block before:h-[90%] before:w-full before:bg-neutral-800/70 sm:block sm:h-[268px] sm:bg-bottom sm:py-5 sm:pt-0">
                <div className="order-2 flex h-auto w-full flex-col items-center justify-center text-white/90 sm:order-1 sm:h-full sm:pl-12">
                  <p className="rounded-full bg-white/10 px-3 py-1 text-sm">
                    Top 10 <span className="font-bold">({it.rank}. Sıra)</span>
                  </p>
                  <p className="text-white/80"> {it.artist} </p>
                  <p className="text-xl font-extrabold tracking-tight"> {it.title} </p>
                </div>

                <div className="-rotate-10 relative left-0 top-0 order-1 h-[164px] w-[164px] overflow-hidden shadow sm:absolute sm:left-[-100px] sm:top-10 sm:order-2 sm:h-[184px] sm:w-[184px]">
                  <Image
                    src={it.cover}
                    alt={`${it.artist} ${it.title}`}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </article>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
