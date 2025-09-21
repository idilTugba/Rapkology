import Link from "next/link";

export default function PostCardImage({
  imageUrl,
  date,
  slug,
  seo,
  cardType,
  classname,
}: {
  imageUrl: string;
  date: string;
  slug: string;
  cardType: "onlyTitle" | "imageAndTitle"; //// Büyük resim olacak auther altında ise onlyTitle, solda ise imageAndTitle
  seo: { metaTitle: string; metaDescription: string; canonicalURL: string };
  classname?: string;
}) {
  const isoDate = date;
  const d = new Date(isoDate);

  const formatted = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);

  if (cardType === "imageAndTitle") return;

  return (
    <div className="postCardImage flex w-full flex-col items-start lg:w-1/3">
      <div className="lg:w-46 relative mb-8 h-auto w-full sm:mb-2 lg:h-[192px]">
        {/* <Image src={imageUrl} alt={seo.metaTitle} fill className="object-contain" /> */}
        <Link href={`/blog/${slug}`}>
          <div
            style={{ backgroundImage: `url("${imageUrl}")` }}
            className={`aspect-video max-h-[500px] w-full bg-cover bg-top lg:h-[175px]`}
          ></div>
        </Link>
      </div>
      <p className="leading-1 mb-2 text-[#3b3b3b]">{formatted}</p>
    </div>
  );
}
