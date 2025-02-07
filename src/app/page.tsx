import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

const poppins = Poppins({
  subsets: [],
  weight: "700",
});
const interLight = Inter({
  subsets: [],
  weight: "500",
});

export default function Home() {
  return (
    <main>
      <div className="mt-20 scroll-smooth">
        <div className="container static px-5 pb-3 pt-8 flex lg:gap-3 transition-all">
          <div className="box group relative xl:w-3/4 border-4 w-full px-16 lg:pt-20 pt-14 pb-10 lg:py-12 rounded-2xl lg:text-end transition ease-out duration-500 ">
            {/* <Image
              className="absolute w-16 h-12 lg:w-32 lg:h-24 md:w-28 md:h-20 -top-7 left-10 lg:left-40 group-hover:scale-110 transition ease-out duration-500"
              src="/petik.png"
              alt="petik"
              height={100}
              width={100}
            /> */}
            <div>
              <div className="flex items-center">
                <div className="relative lg:hidden overflow-hidden h-[100px] max-w-[100px] min-w-[100px] mr-3 mb-2 rounded-full">
                  <Image
                    className="w-full"
                    src={"/roy-square.jpeg"}
                    layout="fill"
                    objectFit="cover"
                    alt="fotoroy"
                  />
                </div>
                <div className="w-2/3 md:w-full">
                  <h6 className="md:text-3xl lg:text-8xl mt-3 mb-4">
                    <span className={poppins.className}>
                      Roy
                      <br />
                      Belmiro
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <p className="mb-16 md:mb-10 lg:text-xl md:text-lg text-stone-500 ">
                Dari akuntansi ke teknologi <br />
                kini saya fokus kembali pada pengembangan web dan mobile <br />
                khususnya dengan React Native
              </p>
            </div>
            <div className="flex justify-end ">
              <a className="items-center text-black hover:text-white p-2 text-center mx-1 bg-transparent border-2 border-black rounded-full w-12 h-12 cursor-pointer hover:bg-black transition ease-out duration-300 active:bg-slate-400">
                <i className=" text-xl ri-linkedin-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/royterpadu/"
                target="_blank"
                className=" text-black items-center p-2 text-center mx-1 bg-transparent border-2 border-black rounded-full w-12 h-12 cursor-pointer hover:bg-black hover:text-white transition ease-out duration-300 active:bg-slate-400"
              >
                <i className=" text-xl ri-instagram-line "></i>
              </a>
              <a
                href="#contact"
                className="text-white py-3 bg-black mx-1 px-5 rounded-full cursor-pointer hover:bg-slate-600 transition ease-out duration-300 active:bg-slate-400"
              >
                Contact me!
              </a>
            </div>
          </div>
          <div className="box lg:w-1/4 relative invisible lg:visible bg-blue-400 rounded-2xl overflow-hidden ">
            <Image
              className="scale-100 hover:scale-105 transition ease-out duration-500"
              layout="fill"
              objectFit="cover"
              src="/roy-foto.png"
              alt="roy-foto"
            />
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
