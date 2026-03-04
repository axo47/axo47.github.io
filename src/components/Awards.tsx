import AnimatedSection from "./AnimatedSection";

const awards = [
  "UPIR Scholarship — Introduction to Mathematical Research · Polytechnique Montréal",
  "UPIR Scholarship — Introduction to Machine Learning Research · Polytechnique Montréal",
];

const Awards = () => (
  <section className="py-20 md:py-28 border-t border-border">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-serif-display mb-12">Awards</h2>
      </AnimatedSection>
      <div className="flex flex-wrap gap-3">
        {awards.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <span className="inline-block border border-border rounded-full px-5 py-2.5 text-sm font-body text-foreground">
              {a}
            </span>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
