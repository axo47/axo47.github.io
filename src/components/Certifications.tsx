import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

interface Cert {
  title: string;
  issuer: string;
  date: string;
}

const groups: { label: string; certs: Cert[] }[] = [
  {
    label: "CISCO",
    certs: [
      { title: "DevOps for Network Automation (NetDevOps)", issuer: "Cisco", date: "Dec 2025" },
      { title: "Network Security", issuer: "Cisco", date: "Dec 2025" },
      { title: "Introduction to Network Automation", issuer: "Cisco", date: "Dec 2025" },
      { title: "Network Architecture Fundamentals", issuer: "Cisco", date: "Dec 2025" },
    ],
  },
  {
    label: "IBM",
    certs: [
      { title: "Fundamentals of Building AI Agents", issuer: "IBM", date: "Dec 2025" },
      { title: "Develop Generative AI Applications: Get Started", issuer: "IBM", date: "Dec 2025" },
      { title: "Introduction to Data Engineering", issuer: "IBM", date: "Dec 2025" },
    ],
  },
  {
    label: "META",
    certs: [
      { title: "Version Control", issuer: "Meta", date: "Mar 2026" },
      { title: "Advanced MySQL Topics", issuer: "Meta", date: "Mar 2026" },
      { title: "Introduction to Databases", issuer: "Meta", date: "Feb 2026" },
    ],
  },
  {
    label: "OTHER",
    certs: [
      { title: "Securing AI and Advanced Topics", issuer: "Johns Hopkins University", date: "Jan 2026" },
      { title: "DevOps and AI on AWS: AIOps", issuer: "Amazon Web Services", date: "Dec 2025" },
      { title: "Machine Learning in Production", issuer: "DeepLearning.AI", date: "Dec 2025" },
    ],
  },
];



const Certifications = () => {
  let counter = 0;
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection>
          <SectionHeader number="4" title="Certifications" />
        </AnimatedSection>

        <div className="space-y-8">
          {groups.map((g) => (
            <AnimatedSection key={g.label} delay={0.05}>
              <p className="font-mono-math text-xs text-muted-foreground uppercase tracking-widest mb-3">
                {g.label}
              </p>
              <div className="space-y-1.5">
                {g.certs.map((c) => {
                  counter++;
                  return (
                    <p key={counter} className="font-mono-math text-xs text-muted-foreground leading-relaxed">
                      <span className="citation-number">[{counter}]</span>{" "}
                      <span className="font-academic italic text-foreground text-sm">{c.title}</span>.{" "}
                      {c.issuer}, {c.date}.
                    </p>
                  );
                })}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
