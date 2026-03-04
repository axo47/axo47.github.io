import AnimatedSection from "./AnimatedSection";

const education = [
  {
    date: "Aug 2023 – May 2027",
    degree: "B.Eng. Software Engineering",
    school: "Polytechnique Montréal",
    gpa: "GPA 4.0 / 4.0",
  },
  {
    date: "Sep 2024 – Aug 2027",
    degree: "B.Sc. Applied Mathematics (Minor)",
    school: "Université de Montréal",
    gpa: "GPA 4.3 / 4.3",
  },
];

const Education = () => (
  <section className="py-20 md:py-28 border-t border-border">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-serif-display mb-16">Education</h2>
      </AnimatedSection>
      <div className="space-y-10">
        {education.map((ed, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-body mb-1">
              {ed.date}
            </p>
            <h3 className="text-lg font-body font-medium text-foreground">
              {ed.degree} <span className="text-muted-foreground font-normal">· {ed.school}</span>
            </h3>
            <p className="text-sm text-primary font-body mt-1">{ed.gpa}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
