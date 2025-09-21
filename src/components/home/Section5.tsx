import { RapPostCollection } from "@/lib/types";

import { useCallback, useEffect, useRef, useState } from "react";
import { byTag } from "@/lib/utils/dataFilters";
import clsx from "clsx";
import Title from "../Title";
import Footer from "../Footer";
import Title2 from "../Title2";
import PostCard from "../postCard/PostCard";
import { TAGS } from "@/constants";

type Props = { data?: RapPostCollection; initialLimit?: number };

export default function Section5({ data, initialLimit = 5 }: Props) {
  const [rows, setRows] = useState<RapPostCollection>(data ?? []);
  const [active, setActive] = useState<string | null>("");
  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && visibleCount < rows.length) {
        setLoading(true);
        setTimeout(() => {
          setVisibleCount((prev) => (prev + 5 > rows.length ? rows.length : prev + 5));
          setLoading(false);
        }, 1200);
      }
    });

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [loading, visibleCount, rows.length]);

  const handleFilter = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const id: string | undefined = e.currentTarget.dataset.key;
      setActive(id || null);
      if (!id || !data) return;
      const dataTaged = byTag(data, id);
      //Olmayan taglerde hepsini gösterdim
      if (id === "Rap Sohpetleri" || id === "Rap Müsabakaları" || id === "Rap Haberleri") {
        setRows(data ?? []);
        return;
      }
      if (dataTaged.length === 0) return;
      setRows(dataTaged);
    },
    [data]
  );

  return (
    <section className="section5Content m-auto my-20 grid grid-cols-1 items-start gap-4 px-5 md:my-32 lg:mx-28 lg:grid-cols-6 lg:grid-rows-2">
      {/* ilk div'in yüksekliği scrol yaptıkça değiştiği için burada footer row-col sayısına göre işleme giremiyor. 
      bu sebeple iki kere footer çağrıldı */}
      <div className="order-2 lg:order-1 lg:col-span-4 lg:row-span-2">
        <Title>
          KEŞFET<span className="icon icon--compass text-rkyellow-500 left-4 top-1 text-5xl"></span>
        </Title>
        {rows.slice(0, visibleCount).map((post, i) => (
          <PostCard
            key={post._id}
            post={post}
            i={i}
            cardType="onlyTitle"
            classname="hiddenNumber"
          />
        ))}
        {loading && <p className="my-10 text-center">Yükleniyor...</p>}
        {visibleCount < rows.length && <div ref={loadMoreRef} className="h-10 bg-transparent" />}
      </div>
      <div className="order-1 lg:order-2 lg:col-span-2">
        <Title2>NE GÖRMEK İSTERSİN?</Title2>
        <div>
          {TAGS.map((tag) => (
            <button
              key={tag}
              data-key={tag}
              onClick={handleFilter}
              className={clsx(
                "hover:bg-rkyellow-500 border-1 hover:text-rkblack-500 hover:border-rkyellow-500 m-1 box-border border-white px-6 py-2 font-bold hover:font-bold",
                active === tag
                  ? "bg-rkyellow-500 text-rkblack-500 !border-rkyellow-500"
                  : "bg-black"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="hidden lg:block">
          <Footer />
        </div>
      </div>
      <div className="order-3 block lg:order-3 lg:col-span-2 lg:hidden">
        <Footer />
      </div>
    </section>
  );
}
