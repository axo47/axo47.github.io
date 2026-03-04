import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface LemmaProps {
  number: number;
  value: number;
  suffix?: string;
  description: string;
  delay?: number;
}

const Lemma = ({ number, value, suffix = "", description, delay = 0 }: LemmaProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <AnimatedSection delay={delay}>
      <div ref={ref} className="flex items-baseline gap-4 py-3">
        <span className="citation-number text-xs whitespace-nowrap">Lemma {number}.</span>
        <span className="font-academic text-3xl md:text-4xl text-foreground tabular-nums min-w-[3ch]">
          {count}{suffix}
        </span>
        <span className="font-mono-math text-xs text-muted-foreground leading-relaxed">
          {description}
        </span>
      </div>
    </AnimatedSection>
  );
};

const lemmas = [
  { value: 13, suffix: "+", description: "certifications across Cisco, IBM, AWS, Meta, Johns Hopkins" },
  { value: 2, description: "active research internships in AI & health" },
  { value: 4, suffix: ".0", description: "GPA — Software Engineering, Polytechnique Montréal" },
  { value: 4, suffix: ".3", description: "GPA — Applied Mathematics, Université de Montréal" },
  { value: 6, suffix: "+", description: "simultaneous active professional roles" },
  { value: 2, description: "UPIR research scholarships awarded" },
];

const Metrics = () => (
  <section className="py-16 border-t border-b border-border">
    <div className="container mx-auto px-6 md:px-12">
      {lemmas.map((l, i) => (
        <Lemma key={i} number={i + 1} {...l} delay={i * 0.06} />
      ))}
    </div>
  </section>
);

export default Metrics;
