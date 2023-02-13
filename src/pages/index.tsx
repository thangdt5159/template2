import { Inter } from "@next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar/Navbar";
import Landing from "../components/Landing";
import Metaverse from "../components/Metaverse";
import NFTMarketplace from "../components/NFTMarketplace";
import Invest from "../components/Invest";
import Partners from "../components/Partners";
import Roadmap from "../components/Roadmap";
import Ourteam from "../components/Ourteam";
import Social from "../components/Social";
import Community from "../components/Community";
import BackToTop from "../components/BackToTop";
import VideoMetaverse from "../components/VideoMetaverse";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const scrollHeight = window.innerHeight;

  // useEffect(() => {
  //   console.log(scrollHeight);
  // }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="text-white pt-[90px] bg-[#110328] md:pt-0 relative before:bg-headerBg before:bg-no-repeat before:bg-cover before:absolute before:top-0 before:w-full before:h-[865px] before:-z-[1]">
      <Navbar />
      <Landing />
      <VideoMetaverse />
      <Metaverse />
      <NFTMarketplace />
      <Invest />
      <Partners />
      <Roadmap />
      <Ourteam />
      <Social />
      <Community />
      <BackToTop />
    </main>
  );
}
