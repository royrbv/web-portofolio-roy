"use client";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: [],
  weight: "700",
});
const interLight = Inter({
  subsets: [],
  weight: "500",
});

const AboutSection = () => {
  const [subAbout, setSubAbout] = useState(1);

  return (
    <div>
      <div id="about" className="scroll-smooth text-white scroll-my-20">
        <div className="container relative mx-auto mb-3 px-5">
          <div className=" bg-black rounded-2xl p-7 pb-16">
            <Image
              className="absolute bottom-0 md:-right-5 rotate-12 -right-3 w-16 md:w-24 transition ease-out duration-500"
              src="/gitar.png"
              alt="gitar"
              height={100}
              width={100}
            />
            <div className={poppins.className}>
              <h1 className="text-3xl md:mb-10 mb-4">About Me</h1>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="items-center relative md:w-2/5 w-auto md:mx-10">
                {/* <i className="absolute bottom-44 z-28 -left-8 text-lime-500 text-4xl ri-arrow-right-s-fill"></i>
                <i className="absolute bottom-28 z-28 -left-8 text-lime-500 text-4xl ri-arrow-right-s-fill"></i>
                <i className="absolute bottom-12 z-28 -left-8 text-lime-500 text-4xl ri-arrow-right-s-fill"></i> */}
                <div
                  className="flex p-4 mb-3 h-14 items-center justify-center border-white rounded-xl border-2 active:border-gray-500 transition-all"
                  onClick={() => {
                    setSubAbout(1);
                  }}
                >
                  <a className="bg-white w-2 h-2 mx-1 rounded-full" />
                  <a className="bg-white w-2 h-2 mx-1 rounded-full" />
                  <a className="bg-white w-2 h-2 mx-1 rounded-full" />
                </div>
                <div className={interLight.className}>
                  <div
                    className="group/unesa relative justify-center hover:justify-start hover:ease-in overflow-hidden flex items-center bg-white text-black rounded-xl py-4 h-14 mb-3 border-white border-2 active:border-gray-500 transition-all"
                    onClick={() => {
                      setSubAbout(2);
                    }}
                  >
                    <Image
                      className="w-16 h-8 group-hover/unesa:mx-0 md:group-hover/unesa:mx-2 px-4 "
                      src={"/unesa-logo.webp"}
                      width={23}
                      height={20}
                      alt="unesa-logo"
                    />
                    <a className=" w-auto">Universitas Negeri Surabaya</a>
                    <div className="absolute invisible -right-full bg-black h-full w-10/12 px-4 items-center flex border-2 border-white text-white group-hover/unesa:right-0 group-hover/unesa:visible rounded-r-xl transition-all ease-out duration-300">
                      <a className="text-center w-full">
                        S1 Teknik Informatika 2017-2022
                      </a>
                    </div>
                  </div>
                  <div
                    className="group/snb relative justify-center hover:justify-start hover:ease-in overflow-hidden flex items-center bg-white text-black rounded-xl py-4 h-14 mb-3 border-white border-2 active:border-gray-500 transition-all ease-out"
                    onClick={() => {
                      setSubAbout(3);
                    }}
                  >
                    <Image
                      className="w-16 h-7 group-hover/snb:mx-0 md:group-hover/snb:mx-2 px-4 "
                      src={"/snb-logo.png"}
                      width={23}
                      height={20}
                      alt="snb-logo"
                    />
                    <a className=" w-auto">PT. Sekar Nusa Baruna</a>
                    <div className="absolute invisible -right-full bg-black h-full w-10/12 px-4 items-center flex border-2 border-white text-white group-hover/snb:right-0 group-hover/snb:visible rounded-r-xl transition-all ease-out duration-300">
                      <a className="text-center w-full">
                        Accounting Staff 2022-2024
                      </a>
                    </div>
                  </div>
                  <div
                    className="bg-white text-black rounded-xl h-14 flex items-center mb-3 text-center hover:text-2xl hover:font-bold overflow-hidden transition-all  border-white border-2 active:border-gray-500"
                    onClick={() => {
                      setSubAbout(4);
                    }}
                  >
                    <i className="w-full ri-question-mark ease-out duration-100"></i>
                  </div>
                </div>
              </div>
              {subAbout == 1 && (
                <div className="md:w-3/5 justify-between gap-6 flex flex-col w-auto md:m-0">
                  <p>
                    <span className={poppins.className}>
                      <span className="mb-3">Hallo!</span>
                    </span>
                    <br />
                    I’m interested in web and mobile application development and
                    design. Although my work experience was in different topic,
                    i have learned valuable things, especially soft skills. It
                    realized that i enjoy working in teams and managing tasks
                    effectively. <br />
                    <br /> Not wanting to waste the time and effort I spent from
                    college, I decided to switch my career back to the tech
                    field. I understand that i need to start it from scratch, so
                    I am seeking opportunities to learn about the tech industry
                    and gain real-world experience.
                  </p>
                  <div className="flex justify-end md:mx-10">
                    <a className="text-black py-2 bg-white px-5 rounded-full cursor-pointer hover:bg-slate-600 transition ease-out duration-300 active:bg-slate-400">
                      Get to know me!
                    </a>
                  </div>
                </div>
              )}
              {subAbout == 2 && (
                <div className="md:w-3/5 justify-between gap-6 flex flex-col w-auto md:m-0">
                  <p>
                    <span className={poppins.className}>
                      <span className="mb-3">2017-2022</span>
                    </span>
                    <br />I went to Universitas Negeri Surabaya,
                    <br />I majored in Informatics Engineering. Some of the most
                    interesting courses I took were Human-Computer Interaction
                    and Computer Graphics. The campus has fantastic sport
                    facilities and a good educational culture. I participated in
                    organizing several college events, like a national seminar,
                    which were great for building my soft skills and making
                    friends.
                    <br />
                    Overall, my time at UNESA was transformative. It equipped me
                    with not just academic knowledge but also life skills and
                    lifelong friends.
                  </p>
                  <div className="flex justify-end md:mx-10">
                    <a className="text-black py-2 bg-white px-5 rounded-full cursor-pointer hover:bg-slate-600 transition ease-out duration-300 active:bg-slate-400">
                      Get to know me!
                    </a>
                  </div>
                </div>
              )}
              {subAbout == 3 && (
                <div className="md:w-3/5 justify-between gap-6 flex flex-col w-auto md:m-0">
                  <p>
                    <span className={poppins.className}>
                      <span className="mb-3">2022-2024</span>
                    </span>
                    <br />
                    I worked at PT. Sekar Nusa Baruna as an accounting staff,
                    <br />I handled monthly cost fluctuation reports and
                    prepared monthly account statements for three branches. This
                    company is a distributor of Walls ice cream products.
                  </p>
                  <div className="flex justify-end md:mx-10">
                    <a className="text-black py-2 bg-white px-5 rounded-full cursor-pointer hover:bg-slate-600 transition ease-out duration-300 active:bg-slate-400">
                      Get to know me!
                    </a>
                  </div>
                </div>
              )}
              {subAbout == 4 && (
                <div className="h-auto justify-center items-center gap-2 flex md:w-3/5 w-auto md:mx-0">
                  <div className={poppins.className}>
                    <p className="text-center mb-4">:)</p>
                    <p className="text-center">
                      I hope to work with you in the future.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
