import AnimatedSection from "./AnimatedSection";

const certs = [
  { date: "Mar 2026", name: "Version Control", issuer: "Meta" },
  { date: "Mar 2026", name: "Advanced MySQL Topics", issuer: "Meta" },
  { date: "Feb 2026", name: "Introduction to Databases", issuer: "Meta" },
  { date: "Jan 2026", name: "Securing AI and Advanced Topics", issuer: "Johns Hopkins University" },
  { date: "Dec 2025", name: "DevOps for Network Automation (NetDevOps)", issuer: "Cisco" },
  { date: "Dec 2025", name: "Network Security", issuer: "Cisco" },
  { date: "Dec 2025", name: "DevOps and AI on AWS: AIOps", issuer: "Amazon Web Services" },
  { date: "Dec 2025", name: "Machine Learning in Production", issuer: "DeepLearning.AI" },
  { date: "Dec 2025", name: "Fundamentals of Building AI Agents", issuer: "IBM" },
  { date: "Dec 2025", name: "Develop Generative AI Applications: Get Started", issuer: "IBM" },
  { date: "Dec 2025", name: "Introduction to Network Automation", issuer: "Cisco" },
  { date: "Dec 2025", name: "Network Architecture Fundamentals", issuer: "Cisco" },
  { date: "Dec 2025", name: "Introduction to Data Engineering", issuer: "IBM" },
];

const Certifications = () => (
  <section className="py-20 md:py-28 border-t border-border">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-serif-display mb-16">Certifications</h2>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.03}>
            <div className="border border-border rounded-lg px-5 py-4">
              <p className="text-xs text-muted-foreground font-body mb-1">{c.date}</p>
              <p className="text-sm font-body font-medium text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground font-body mt-0.5">{c.issuer}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
