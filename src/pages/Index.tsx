import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";
import SmoothScroll from "@/components/SmoothScroll";

const ScrollCanvas3D = lazy(() => import("@/components/ScrollCanvas3D"));

const Index = () => (
  <main className="bg-background relative" id="hero">
    <SmoothScroll />
    <Suspense fallback={null}>
      <ScrollCanvas3D />
    </Suspense>
    <div className="relative" style={{ zIndex: 2 }}>
      <FloatingNav />
      <Hero />
      <Metrics />
      <Experience />
      <div id="skills"><Skills /></div>
      <div id="education"><Education /></div>
      <Awards />
      <Certifications />
      <Contact />
    </div>
  </main>
);

export default Index;
