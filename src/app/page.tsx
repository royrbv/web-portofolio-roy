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
        <div className="container static px-5 pb-3 pt-8 flex md:gap-3 transition-all">
          <div className="box group md:w-3/4 w-full bg-stone-200 px-7 md:pt-20 pt-14 pb-10 md:py-12 rounded-2xl md:text-end transition ease-out duration-500 ">
            <Image
              className="absolute w-12 h-9 md:w-32 md:h-24 top-24 left-10 lg:left-40 group-hover:scale-110 transition ease-out duration-500"
              src="/petik.png"
              alt="petik"
              height={100}
              width={100}
            />
            <div>
              <div className="flex items-center">
                <div className="relative md:hidden overflow-hidden w-[100px] h-[100px] mr-3 mb-3 rounded-full">
                  <Image
                    className="absolute scale-100"
                    src={"/roy-square.jpeg"}
                    layout="fill"
                    objectFit="cover"
                    alt="fotoroy"
                  />
                </div>
                <div className="w-2/3 md:w-full">
                  <h1 className="text-5xl md:text-9xl justify-end">
                    <span className={poppins.className}>Hallo</span>
                  </h1>
                  <h6 className="md:text-3xl mb-2 md:mb-10">
                    <span className={poppins.className}>I'm Roy Belmiro</span>{" "}
                    Junior Developer
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <p className="mb-16 mt-3 md:mb-28 text-sm md:text-lg ">
                I switched my career from{" "}
                <span className={poppins.className}>accounting</span> back to{" "}
                <span className={poppins.className}>tech</span>, specifically
                web and mobile development.
                <br />
                Currently, I am learning about React Native.
                <br />I also have an enthusiasm for UI Design topics.
              </p>
            </div>
            <div className="flex justify-end ">
              <a className="items-center text-black hover:text-white p-2 text-center mx-1 bg-transparent border-2 border-black rounded-full w-12 h-12 cursor-pointer hover:bg-black transition ease-out duration-300 active:bg-slate-400">
                <i className=" text-xl ri-linkedin-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/royrbv/"
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
          <div className="box md:w-1/4 relative invisible md:visible bg-blue-400 rounded-2xl overflow-hidden ">
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
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
