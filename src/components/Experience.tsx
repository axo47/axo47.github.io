import AnimatedSection from "./AnimatedSection";

interface Entry {
  date: string;
  role: string;
  org: string;
  bullets: string[];
}

const experiences: Entry[] = [
  {
    date: "Sep 2025 – Present",
    role: "Research Intern (UPIR)",
    org: "LINCS LAB, Polytechnique Montréal",
    bullets: [
      "Detection pipeline with Mistral-7B + LLM2Vec for vehicular network threat analysis",
      "Agentic AI layer (GPT-20B) generating explainable threat intelligence reports",
      "Fixed data leakage via Stratified GroupKFold cross-validation by vehicleID",
    ],
  },
  {
    date: "Jun 2025 – Present",
    role: "Research Intern",
    org: "CHUM – Université de Montréal Hospital",
    bullets: [
      "ML models (Random Forest, SVM, Neural Networks) to predict Oncotype DX scores",
      "Collaborated with oncologists to bridge clinical data and AI-driven insights",
    ],
  },
  {
    date: "Aug 2025 – Present (Intern: May–Aug 2025)",
    role: "Junior Software Developer",
    org: "Axians Canada",
    bullets: [
      "Full-stack apps with NestJS + Angular",
      "Azure services: App Service, Entra ID, SQL, Blob, VM, IAM",
      "CI/CD with GitHub Actions; Agile methodology",
    ],
  },
  {
    date: "Dec 2025 – Present",
    role: "Co-Founder",
    org: "PharmaFlow",
    bullets: [
      "Building a health-tech startup focused on pharmacy workflow optimization",
    ],
  },
  {
    date: "Dec 2025 – Present",
    role: "VP Formation",
    org: "Google Developer Group – Polytechnique Montréal",
    bullets: [
      "Lead technical workshops on AI, Cloud, DevOps, and Mobile for engineering students",
      "Manage the club's technical roadmap",
    ],
  },
  {
    date: "Dec 2025 – Present",
    role: "Teaching Assistant (LOG2420)",
    org: "Polytechnique Montréal",
    bullets: [
      "User-Centered Design: mentored students through the full design lifecycle",
      "Supervised Figma prototyping labs + heuristic usability evaluations",
    ],
  },
  {
    date: "May 2025 – Present",
    role: "AI Educator",
    org: "PolyAI",
    bullets: [
      "Design and deliver interactive AI educational content",
      "Support students through structured, Agile-planned learning programs",
    ],
  },
];

const Experience = () => (
  <section id="work" className="py-20 md:py-28">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-serif-display mb-16">Experience</h2>
      </AnimatedSection>
      <div className="relative border-l border-border pl-8 md:pl-12 space-y-14">
        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <div className="absolute -left-[5px] w-[9px] h-[9px] rounded-full bg-primary" style={{ marginTop: "6px" }} />
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-body mb-1">
              {exp.date}
            </p>
            <h3 className="text-lg font-body font-medium text-foreground">
              {exp.role} <span className="text-muted-foreground font-normal">· {exp.org}</span>
            </h3>
            <ul className="mt-3 space-y-1.5">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-sm text-muted-foreground font-body leading-relaxed">
                  · {b}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
