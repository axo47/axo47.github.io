import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const education = [
  {
    school: "Polytechnique Montréal",
    degree: "Bachelor of Engineering — Software Engineering",
    date: "August 2023 → May 2027",
    gpa: "4.0 / 4.0",
  },
  {
    school: "Université de Montréal",
    degree: "Bachelor of Science — Applied Mathematics (Minor)",
    date: "September 2024 → August 2027",
    gpa: "4.3 / 4.3",
  },
];

const Education = () => (
  <section className="py-20 md:py-28 border-t border-border">
    <div className="container mx-auto px-6 md:px-12">
      <AnimatedSection>
        <SectionHeader number="3" title="Academic Formation" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        {education.map((ed, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="border-t border-border pt-5">
              <p className="font-academic text-xl text-foreground">{ed.school}</p>
              <p className="font-mono-math text-xs text-muted-foreground mt-1">{ed.degree}</p>
              <p className="font-mono-math text-xs text-muted-foreground mt-1">{ed.date}</p>
              <p className="font-mono-math text-xs text-foreground mt-2">
                GPA: {ed.gpa} <span className="text-primary">✦</span> Distinction
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
