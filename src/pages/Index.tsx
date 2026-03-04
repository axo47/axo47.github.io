import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";

const Index = () => (
  <main className="bg-background" id="hero">
    <FloatingNav />
    <Hero />
    <Metrics />
    <Experience />
    <div id="skills"><Skills /></div>
    <div id="education"><Education /></div>
    <Awards />
    <Certifications />
    <Contact />
  </main>
);

export default Index;
