import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import WhyWork from "@/components/sections/WhyWork";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyWork />
      <Process />
      <TechStack />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
