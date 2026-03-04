import AnimatedSection from "./AnimatedSection";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => (
  <section className="min-h-[85vh] flex items-center">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display leading-tight text-foreground">
            Hassib Kevin Ezzedine
          </h1>
          <p className="mt-4 text-lg text-foreground font-body">
            Software Engineer · AI Researcher · Co-Founder
          </p>
          <p className="mt-1 text-base text-muted-foreground font-body">
            Polytechnique Montréal × Université de Montréal
          </p>
          <div className="mt-8 flex gap-8">
            <a
              href="#work"
              className="text-sm font-body text-foreground hover:text-primary transition-colors duration-200 border-b border-transparent hover:border-primary"
            >
              View Work ↓
            </a>
            <a
              href="/resume"
              className="text-sm font-body text-foreground hover:text-primary transition-colors duration-200 border-b border-transparent hover:border-primary"
            >
              Resume ↑
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="flex justify-center md:justify-end">
          <img
            src={profilePhoto}
            alt="Hassib Kevin Ezzedine"
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover"
          />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Hero;
