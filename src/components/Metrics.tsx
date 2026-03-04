import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";

const Metrics = () => (
  <section className="border-t border-b border-border py-12">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <CountUp end={13} suffix="+" label="Certifications" />
          <CountUp end={2} label="Researches" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif-display text-foreground">4.0 / 4.3</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1 font-body tracking-wide uppercase">GPA Poly/UdeM</div>
          </div>
          <CountUp end={6} suffix="+" label="Active Roles" />
          <CountUp end={2} label="UPIR Scholarships" />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Metrics;
