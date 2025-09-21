import FavoritesSlider from "../sliders/FavoriteSlider";
import Title from "../Title";

export type FavItem = {
  id: string;
  rank: number;
  artist: string;
  title: string;
  cover: string;
};

const demo: FavItem[] = [
  { id: "1", rank: 2, artist: "50 CENT", title: "CURTIS", cover: "/sample.png" },
  { id: "2", rank: 3, artist: "SNOOP DOGG", title: "ALGORITHM", cover: "/sample_2.png" },
  { id: "3", rank: 4, artist: "RAP", title: "SAMPLE", cover: "/sample_3.png" },
  { id: "4", rank: 5, artist: "ANOTHER", title: "ALBUM", cover: "/sample_2.png" },
  { id: "5", rank: 6, artist: "EXTRA", title: "DROPS", cover: "/sample_3.png" },
];

export default function Section4() {
  return (
    <section className="relative flex flex-col justify-between pt-20 sm:flex-row sm:pt-48">
      <div className="absolute left-0 top-0 h-48 w-[80%] bg-[url(/socialMediaVektor.png)] bg-contain bg-left-top bg-no-repeat md:w-[100%] md:bg-auto">
        <span className="icon icon--youtube text-rkblack-500 top-[-5px] ml-10 text-7xl md:ml-36 md:text-9xl"></span>
        <span className="icon icon--spotify text-rkblack-500 top-[-5px] ml-6 text-7xl md:text-9xl"></span>
      </div>
      <div className="section4Content pl-0 sm:pl-5 lg:pl-36">
        <Title classname="pt-0 text-center sm:text-justify sm:pt-32">
          AYIN <br />
          FAVORİLERİ
        </Title>
      </div>
      <FavoritesSlider items={demo} />
    </section>
  );
}
