import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: [],
  weight: "700",
});

const ProjectSection = () => {
  return (
    <div>
      <div id="project" className="scroll-smooth scroll-my-20">
        <div className="container mx-auto mb-3 px-5">
          <div className=" bg-yellow-100 rounded-2xl shadow p-7">
            <div className={poppins.className}>
              <h1 className="text-3xl">My Projects</h1>
            </div>
          </div>
        </div>
      </div>
      <div id="web" className="scroll-smooth">
        <div className="container mx-auto mb-3 px-5">
          <div className=" border-4 border-yellow-100 rounded-2xl p-7">
            <div className={poppins.className}>
              <div className="mb-3 mr-2 flex flex-col md:flex-row gap-2 md:items-center">
                <li className="text-3xl mb-2">UangKu</li>
                <div className="text-xs md:text-sm ml-1 mb-1 gap-2 flex">
                  <a className=" py-1 text-white rounded-lg bg-black px-2">
                    Full Stack Coder
                  </a>
                  <a className=" py-1 text-white rounded-lg bg-black px-2">
                    UI Designer
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="md:text-xl md:ml-8">
              Help you track your spending and income, and visualize it!
            </div> */}
            <div className="md:mx-10 md:my-10 my-4 flex flex-col md:flex-row">
              <div className="md:w-1/2 md:px-20">
                <Image
                  className="md:hidden"
                  alt="project-uangku"
                  src={"/project-uangku.png"}
                  height={6000}
                  width={6000}
                />
                <Image
                  className="hidden md:block"
                  alt="project-uangku"
                  src={"/project-uangku2.png"}
                  height={6000}
                  width={6000}
                />
              </div>
              <div className="flex flex-col gap-8 my-4 md:mx-4 md:py-10 md:w-1/2">
                <p className="">
                  A dummy project, a mobile application for recording personal
                  financial transactions of expenses and income. <br />
                  <br />
                  After the design process, the application was built using{" "}
                  <span className={poppins.className}>React Native</span>,
                  supported by{" "}
                  <span className={poppins.className}>
                    Firebase Authentication
                  </span>{" "}
                  and <span className={poppins.className}>Firestore</span> for
                  cloud storage.
                </p>
                <div className="">
                  <span className={poppins.className}>Features :</span>
                  <li>Simple, easy to use</li>
                  <li>Visualize it with Charts</li>
                  <li>Cloud, access your data everywhere</li>
                </div>
                <div>
                  Would you try it?
                  <a
                    className="underline cursor-pointer text-slate-800 hover:text-slate-500"
                    href="https://drive.google.com/file/d/1xKHyx4USSIn44RStVbLX1CWmE1OcyTJX/view?usp=sharing"
                    target="_blank"
                  >
                    <span className={poppins.className}> Get the .apk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
