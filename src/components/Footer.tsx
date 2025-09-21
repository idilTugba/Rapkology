import { NAV, SOCIAL_MEDIA } from "@/constants";
import Title2 from "./Title2";

export default function Footer({ classname }: { classname?: string }) {
  return (
    <footer className={`bg-rkblack-500 mt-20 py-6 ${classname}`}>
      <div className="max-w-[500px]">
        <Title2>GELİŞMELERDEN İLK SEN HABERDAR OL!</Title2>
        <form action="#">
          <div className="border-b-1 relative mb-8 border-[#3b3b3b]">
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full p-4 font-bold text-white outline-0 focus:border-none"
            />
            <button
              type="submit"
              className="text-rkyellow-500 absolute right-0 top-1 p-2 font-bold"
            >
              GÖNDER <span className="icon icon--right top-0.5 ml-1"></span>
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="mb-10">
          {SOCIAL_MEDIA.map((item) => (
            <a key={`${item.label}_rap`} href="#" target="_blank" rel="noopener noreferrer">
              <span className={`icon text-rkyellow-500 mr-3 text-3xl icon--${item.icon}`}></span>
            </a>
          ))}
        </div>
        <div className="block overflow-hidden">
          {NAV.map((i) => (
            <div className="mb-10 mr-10 inline-block" key={i.href}>
              <a href={i.href} className="hover:text-rkyellow-500 transition">
                {i.label}
              </a>
            </div>
          ))}
        </div>
        <div className="container mx-auto text-left text-sm text-[#3b3b3b]">
          <p> © RAPKOLOGY All Rights Are Reserved {new Date().getFullYear()}.</p>
        </div>
      </div>
    </footer>
  );
}
