import AnimatedSection from "./AnimatedSection";
import { NeuralNetworkWatermark, CoordinateGrid } from "./MathDecorations";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">


    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-start">
        {/* Left — Text content */}
        <div>
          <AnimatedSection>
            <p className="section-number mb-4">§ 0.1 — Hassib Kevin Ezzedine</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-academic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-foreground tracking-tight">
              Hassib Kevin<br />Ezzedine
            </h1>
          </AnimatedSection>

          {/* Abstract box */}
          <AnimatedSection delay={0.2}>
            <div className="mt-8 border border-border bg-card p-5 md:p-6 max-w-xl">
              <p className="font-mono-math text-xs leading-relaxed text-muted-foreground">
                <span className="font-academic italic text-foreground text-sm">Abstract.</span>{" "}
                Software Engineering student (GPA 4.0) at Polytechnique Montréal
                & Applied Mathematics (GPA 4.3) at Université de Montréal.
                Researcher in vehicular network security & breast cancer AI.
                Co-founder. 2× UPIR Scholar. Operating at the intersection of
                ML, health systems & cybersecurity.
              </p>
            </div>
          </AnimatedSection>

          {/* Terminal links */}
          <AnimatedSection delay={0.3}>
            <div className="mt-8 flex gap-8">
              <a href="#experience" className="terminal-link">./view_work</a>
              <a href="#contact" className="terminal-link">./resume.pdf</a>
            </div>
          </AnimatedSection>
        </div>

        {/* Right — Photo with coordinate grid */}
        <AnimatedSection delay={0.25} className="relative flex justify-center md:justify-end pt-8 md:pt-16">
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6">
            <CoordinateGrid />
          </div>
          <div className="relative border border-border p-1.5">
            <img
              src={profilePhoto}
              alt="Hassib Kevin Ezzedine"
              className="w-48 h-60 md:w-56 md:h-72 object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Hero;
