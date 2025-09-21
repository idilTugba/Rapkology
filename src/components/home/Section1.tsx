"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../Button";
import { clsx } from "clsx";

type Slide = {
  id: string;
  title: string;
  desc?: string;
  cta?: { label: string; href: string };
  image: string;
  align?: "left" | "right";
  color: boolean;
};

const slides: Slide[] = [
  {
    id: "1",
    title: "DÜNYA RAP\nTRENDLERİNİ\nKONUŞUYORUZ.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    cta: { label: "Devamını Oku", href: "/blog/1" },
    image: "/slide_1.jpg",
    align: "right",
    color: false,
  },
  {
    id: "2",
    title: "TÜRKÇE RAP VEDÜNYA MÜZİK HABERLERİNİ TAKİP ET",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    cta: { label: "Devamını Oku", href: "/etkinlikler" },
    image: "/slide_2.png",
    align: "left",
    color: true,
  },
];

export default function MainSlider() {
  return (
    <section className="relative min-h-screen w-full md:h-screen">
      <div className="hidden h-full min-h-screen w-full lg:block">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 9500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="relative h-full w-full">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  priority
                  className="object-contain object-left opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-end px-12">
                  <div className={"ml-auto max-w-xl pr-7 text-left"}>
                    <h1
                      className={clsx(
                        "whitespace-pre-line text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl",
                        s.color ? "text-white" : "text-rkblack-500"
                      )}
                    >
                      {s.title}
                    </h1>
                    {s.desc && (
                      <p
                        className={clsx(
                          "text-rkblack-500 mt-4 max-w-prose text-sm sm:text-base",
                          s.color ? "text-white" : "text-rkblack-500"
                        )}
                      >
                        {s.desc}
                      </p>
                    )}
                    {s.cta && <Button href={s.cta.href} text={s.cta.label} />}
                  </div>
                </div>

                <div className="text-rkyellow-500 pointer-events-none absolute bottom-0 left-0 right-0 h-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pt-30 items-top bg-size-[250%] bg-position-[bottom_left_59%] mx-auto flex min-h-screen w-full justify-center bg-[url(/slide_2.png)] bg-no-repeat px-4 text-center lg:hidden">
        <div className="flex max-w-[500px] flex-col items-center sm:justify-center">
          <h1
            className={clsx(
              "font-saria-cond mx-3 text-3xl font-extrabold leading-tight tracking-tighter text-white sm:text-4xl"
            )}
          >
            TÜRKÇE RAP VE
            <br /> DÜNYA MÜZİK <br />
            HABERLERİNİ TAKİP ET
          </h1>
          <p className={clsx("mt-4 max-w-prose text-sm text-white")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi
          </p>
          <Button href="#" text="Devamını Oku" />
        </div>
      </div>
    </section>
  );
}
