import Image from "next/image";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Mobile from "./components/Mobile";
import Footer from "./components/Footer";
import Video from "./components/Video";

export default function Home() {
  return (
    <main className="w-full   h-screen">
      <Hero />
      <Section1 />
      <Video />
      <Section2 />
      <Mobile />
      <Section3 />
      <Footer />
    </main>
  );
}
