import type { RapPostCollection } from "@/lib/types";
import { useState } from "react";
import Title from "../Title";
import Trends from "../trends/Trends";
import Button from "../Button";
// import { trending } from "@/lib/utils/dataFilters";
type Props = { data?: RapPostCollection; initialLimit?: number };

export default function Section3({ data, initialLimit = 6 }: Props) {
  const [expanded, setExpanded] = useState(false);
  //SADECE BİR TREND DATA OLDUĞU İÇİN FİLTREMEYİ KALDIRDIM
  // const trendigData = useMemo(() => trending(data || []), [data]);

  if (!data || data.length === 0) return null;
  const canShowMore = !expanded && data.length > initialLimit;
  return (
    <section className="section3Content md:top-none relative top-[-125px] z-[51] mx-auto max-w-7xl px-4 pb-0 pt-12 sm:px-10 sm:pb-16 lg:top-[-50px]">
      <Title classname="left-[-30px] text-center md:text-start ">
        TRENDLER
        <span className="icon icon--lighting text-rkyellow-500 left-4 top-1 text-5xl"></span>
      </Title>
      <Trends data={data} expanded={expanded} initialLimit={initialLimit} />
      {canShowMore && (
        <div className="mt-8 flex justify-center">
          <Button onClick={() => setExpanded(true)} text="Hepsini Göster" />
        </div>
      )}
    </section>
  );
}
