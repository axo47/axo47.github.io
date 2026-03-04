import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { SigmoidCurve } from "./MathDecorations";

const sets = [
  { symbol: "Σ", label: "Languages", items: "TypeScript, Python, Bash, SQL, C/C++" },
  { symbol: "F", label: "Frameworks", items: "NestJS, Angular, React, Figma, Mistral-7B" },
  { symbol: "C", label: "Cloud/DevOps", items: "Azure, GitHub Actions, CI/CD, Docker" },
  { symbol: "R", label: "ML/Research", items: "Random Forest, SVM, Neural Networks, LLM2Vec" },
];

const Skills = () => (
  <section className="py-20 md:py-28 border-t border-border relative overflow-hidden">
    <div className="absolute bottom-8 right-8 hidden md:block">
      <SigmoidCurve />
    </div>
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <AnimatedSection>
        <SectionHeader number="2" title="Technical Repertoire" />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="border border-border bg-card p-5 md:p-6 font-mono-math text-xs leading-loose max-w-2xl">
          {sets.map((s, i) => (
            <div key={i} className="flex flex-wrap gap-x-2">
              <span className="text-muted-foreground">Let</span>
              <span className="text-primary font-medium">{s.symbol}</span>
              <span className="text-muted-foreground">= {"{"}</span>
              <span className="text-foreground">{s.items}</span>
              <span className="text-muted-foreground">{"}"}</span>
              <span className="text-muted-foreground ml-4">← {s.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Skills;
