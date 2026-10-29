import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingAsk } from "@/components/FloatingAsk";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { SectionTabs } from "@/components/SectionTabs";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Stats } from "@/components/Stats";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <>
      <Marquee />
      <Navbar />
      <main>
        <Hero />
        <SectionTabs />
        <Pricing />
        <Services />
        <Stats />
        <Steps />
        <Showcase />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingAsk />
    </>
  );
}
