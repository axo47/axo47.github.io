import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const awards = [
  { title: "UPIR Scholarship — Mathematical Research", org: "Polytechnique Montréal" },
  { title: "UPIR Scholarship — Machine Learning Research", org: "Polytechnique Montréal" },
];

const Awards = () => (
  <section className="py-20 md:py-28 border-t border-border">
    <div className="container mx-auto px-6 md:px-12">
      <AnimatedSection>
        <div className="mb-10">
          <p className="section-number mb-2">Acknowledgements</p>
          <div className="section-rule" />
        </div>
      </AnimatedSection>

      <div className="space-y-6">
        {awards.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="flex items-start gap-3">
              <span className="font-mono-math text-xs text-muted-foreground whitespace-nowrap">
                Acknowledgement {i + 1}.
              </span>
              <div>
                <p className="font-academic italic text-base text-foreground">{a.title}</p>
                <p className="font-mono-math text-xs text-muted-foreground">{a.org}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
