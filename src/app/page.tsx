import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Technologies />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
