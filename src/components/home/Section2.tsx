export default function Section2() {
  return (
    <section className="relative z-50 flex h-[500px] flex-row items-center justify-around bg-[url(/homeSection2bg.png)] bg-cover bg-bottom bg-no-repeat md:h-auto">
      <div className="w-[150px] md:w-[400px]">
        <img
          src="/homeSection2pic1.png"
          alt="Biri"
          className="absolute bottom-0 left-0 w-[230px] md:relative md:w-auto"
        />
      </div>
      <div className="rotate-354 relative top-[-150px] flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-3">
          <img src="/twitch.png" alt="Twitch Icon" className="w-[140px] md:w-[248px]" />
          <div className="md:right-none border-l-1 relative right-[23px] border-[#151515] pl-3 tracking-tighter md:pl-10">
            <h2 className="font-saria-cond text-3xl font-extralight lg:text-6xl">
              HER HAFTA
              <br />
              <span className="text-rkyellow-500 font-saria font-extrabold">CANLIDAYIZ!</span>
            </h2>
            <p className="mt-2 font-extrabold">Bizi Takip Edin!</p>
          </div>
        </div>
        <div className="border-1 mt-5 flex w-[250px] flex-row justify-center rounded-lg border-[#151515] p-3">
          <button className="rounded-sm bg-[#864cf6] px-3 py-2 text-[14px] font-bold">
            {" "}
            <span className="icon icon--heart top-1 mr-1 text-lg"></span>Takip Et
          </button>
          <button className="ml-4 rounded-sm bg-[#222123] px-3 py-2 text-[14px] font-bold">
            <span className="icon icon--star top-1 mr-1"></span> Abone Ol
          </button>
        </div>
      </div>
      <div className="w-[150px] md:w-[400px]">
        <img
          src="/homeSection2pic2.png"
          alt="Biri"
          className="absolute bottom-0 right-0 w-[155px] md:relative md:w-auto"
        />
      </div>
    </section>
  );
}
