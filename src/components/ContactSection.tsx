import Image from "next/image";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: [],
  weight: "700",
});
const interLight = Inter({
  subsets: [],
  weight: "500",
});

const ContactSection = () => {
  return (
    <div>
      <div id="contact" className="scroll-smooth">
        <div className="container relative mx-auto mb-3 px-5">
          <div className=" bg-lime-100 rounded-2xl p-7 pb-16">
            <Image
              className="absolute bottom-0 md:-right-5 rotate-12 right-2 w-12 md:w-20 transition ease-out duration-500"
              src="/chat.png"
              alt="chat"
              height={100}
              width={100}
            />
            <div className={poppins.className}>
              <h1 className="text-3xl md:mb-10 mb-4">Contact</h1>
            </div>

            <div className="flex gap-2 flex-col md:flex-row">
              <div className="flex gap-2 flex-col md:w-1/2">
                <div className="bg-white flex items-center py-5 rounded-xl shadow-md">
                  <i className="ri-mail-fill  bg-gray-100 flex w-12 h-12 items-center justify-center rounded-xl mx-4 text-3xl "></i>
                  <div className="flex flex-col">
                    <div className={poppins.className}>
                      <p>Email</p>
                    </div>
                    <a
                      href="mailto:roybelmirov@gmail.com"
                      className="text-slate-800 hover:underline"
                    >
                      roybelmirov@gmail.com
                    </a>
                  </div>
                </div>
                <div className="bg-white flex items-center py-5 rounded-xl shadow-md">
                  <i className="ri-home-4-fill bg-gray-100 flex w-12 h-12 items-center justify-center rounded-xl mx-4 text-3xl "></i>
                  <div className="flex flex-col">
                    <div className={poppins.className}>
                      <p>Where I stay in</p>
                    </div>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Kec.+Gn.+Anyar,+Surabaya,+Jawa+Timur/data=!4m2!3m1!1s0x2dd7fab6c99ceadd:0x71be7261fadd4a46?sa=X&ved=1t:242&ictx=111"
                      className="text-slate-800 hover:underline"
                    >
                      Gunung Anyar, Surabaya
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white py-5 px-6 md:w-1/2 rounded-xl shadow-md">
                <div className={poppins.className}>
                  <p>Let&apos;s connect</p>
                  <div className="flex my-4">
                    <a
                      href="https://www.instagram.com/royrbv/"
                      target="_blank"
                      className=" text-black flex items-center justify-center text-center mx-1 bg-transparent border-2 border-black rounded-full w-10 h-10 cursor-pointer hover:bg-black hover:text-white transition ease-out duration-300 active:bg-slate-400"
                    >
                      <i className=" text-xl ri-instagram-fill "></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/royvirgiant/"
                      target="_blank"
                      className=" text-black flex items-center justify-center text-center mx-1 bg-transparent border-2 border-black rounded-full w-10 h-10 cursor-pointer hover:bg-black hover:text-white transition ease-out duration-300 active:bg-slate-400"
                    >
                      <i className=" text-xl ri-linkedin-fill "></i>
                    </a>
                    <a
                      href="https://www.tiktok.com/@roy.okan/"
                      target="_blank"
                      className=" text-black flex items-center justify-center text-center mx-1 bg-transparent border-2 border-black rounded-full w-10 h-10 cursor-pointer hover:bg-black hover:text-white transition ease-out duration-300 active:bg-slate-400"
                    >
                      <i className=" text-xl ri-tiktok-fill "></i>
                    </a>
                    <a
                      href="https://www.github.com/royrbv/"
                      target="_blank"
                      className=" text-black flex items-center justify-center text-center mx-1 bg-transparent border-2 border-black rounded-full w-10 h-10 cursor-pointer hover:bg-black hover:text-white transition ease-out duration-300 active:bg-slate-400"
                    >
                      <i className=" text-xl ri-github-fill "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
