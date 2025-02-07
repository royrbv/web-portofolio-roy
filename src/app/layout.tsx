import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "remixicon/fonts/remixicon.css";
import { NAV_LINKS } from "../../constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roy Bel - Junior Developer",
  description: "Roy Bel's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-my-56">
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        rel="stylesheet"
      /> */}

      <body
        id="home"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
      >
        <Navbar navLinks={NAV_LINKS} />
        <main className="relative overflow-hidden ">{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
