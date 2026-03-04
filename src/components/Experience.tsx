import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

interface Entry {
  org: string;
  role: string;
  date: string;
  topic?: string;
  bullets: string[];
  tags: string[];
}

const entries: Entry[] = [
  {
    org: "LINCS LAB, Polytechnique Montréal",
    role: "Research Intern (UPIR)",
    date: "Sep 2025 – Present",
    topic: "Fine-tuning LLMs for Vehicular Network Misbehavior Detection",
    bullets: [
      "Detection pipeline: Mistral-7B + LLM2Vec for BSM sequence encoding",
      "Agentic AI layer (GPT-20B) → explainable threat intelligence reports",
      "Stratified GroupKFold cross-validation → resolved data leakage issues",
    ],
    tags: ["LLM", "Security", "Edge AI", "Research"],
  },
  {
    org: "CHUM – Centre Hospitalier de l'Université de Montréal",
    role: "Research Intern",
    date: "Jun 2025 – Present",
    topic: "AI Prediction of Oncotype DX Scores (Breast Cancer)",
    bullets: [
      "Models: Random Forest · SVM · Neural Networks",
      "Collaborated directly with clinicians on feature interpretation",
    ],
    tags: ["Health AI", "ML", "Clinical Research"],
  },
  {
    org: "Axians Canada",
    role: "Junior Software Developer",
    date: "Aug 2025 – Present (Software Engineer Intern · May–Aug 2025)",
    bullets: [
      "Full-stack: NestJS + Angular · Azure (App Service, Entra ID, SQL, Blob, VM)",
      "CI/CD pipelines via GitHub Actions · Agile/DevOps methodology",
    ],
    tags: ["Full-Stack", "Cloud", "DevOps"],
  },
  {
    org: "PharmaFlow",
    role: "Co-Founder",
    date: "Dec 2025 – Present",
    bullets: ["Health-tech startup: optimizing pharmacy workflow systems"],
    tags: ["Startup", "Health-Tech", "Entrepreneurship"],
  },
  {
    org: "Google Developer Group – Polytechnique Montréal",
    role: "VP Formation",
    date: "Dec 2025 – Present",
    bullets: [
      "Technical workshops: AI · Cloud · DevOps · Mobile",
      "Manage club technical roadmap + coordinate with executive team",
    ],
    tags: ["Leadership", "AI Education"],
  },
  {
    org: "Polytechnique Montréal",
    role: "Teaching Assistant, LOG2420",
    date: "Dec 2025 – Present",
    bullets: [
      "User-Centered Design · Figma prototyping labs",
      "Heuristic usability evaluations + assignment grading",
    ],
    tags: ["UX", "Pedagogy"],
  },
  {
    org: "PolyAI",
    role: "AI Educator",
    date: "May 2025 – Present",
    bullets: ["Interactive AI educational content · Agile-structured curriculum"],
    tags: ["AI", "Education"],
  },
  {
    org: "Propolys Medtech Program",
    role: "Entrepreneur",
    date: "Dec 2025 – Present",
    bullets: ["Intensive program: medical technology concept → viable business"],
    tags: ["MedTech", "Entrepreneurship"],
  },
];

const Experience = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="container mx-auto px-6 md:px-12">
      <AnimatedSection>
        <SectionHeader number="1" title="Experience" />
      </AnimatedSection>

      <div className="space-y-10">
        {entries.map((e, i) => (
          <AnimatedSection key={i} delay={i * 0.04}>
            <div className="group">
              <div className="flex items-start gap-3">
                <span className="citation-number text-sm mt-0.5">[{i + 1}]</span>
                <div className="flex-1">
                  <p className="font-academic text-lg text-foreground font-medium">
                    {e.org}
                  </p>
                  <p className="font-mono-math text-xs text-muted-foreground mt-0.5">
                    {e.role} · {e.date}
                  </p>
                  {e.topic && (
                    <p className="font-mono-math text-xs text-foreground mt-1.5">
                      <span className="text-muted-foreground">Topic:</span> {e.topic}
                    </p>
                  )}
                  <ul className="mt-2 space-y-1">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="font-mono-math text-xs text-muted-foreground leading-relaxed">
                        · {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span key={t} className="tag-pill">[{t}]</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
