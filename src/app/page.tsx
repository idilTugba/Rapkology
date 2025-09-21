"use client";
import { useData } from "@/context/DataContext";
import type { RapPostCollection } from "@/lib/types";
import MainSlider from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section4 from "@/components/home/Section4";
import Section5 from "@/components/home/Section5";

export default function HomePage() {
  const { data } = useData<RapPostCollection>();

  console.log("HomePage data:", data);
  return (
    <>
      <MainSlider />
      <div className="top-none absolute bottom-0 z-50 h-auto min-h-[100px] w-full bg-[url(/vector-bg.png)] bg-cover after:absolute after:left-0 after:top-[98px] after:h-full after:w-full after:bg-[#121212] after:content-[''] md:relative md:top-[-150px] md:bg-contain"></div>
      <Section2 />
      <div className="relative top-[-95px] z-50 h-auto min-h-[100px] w-full bg-[url(/vector-bg.png)] bg-cover after:absolute after:left-0 after:top-[100px] after:h-full after:w-full after:bg-[#121212] after:content-[''] md:bg-contain lg:top-[-150px]"></div>
      <Section3 data={data ?? []} />
      <Section4 />
      <Section5 data={data} />
    </>
  );
}
