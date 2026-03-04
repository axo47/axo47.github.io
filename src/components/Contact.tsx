import AnimatedSection from "./AnimatedSection";

const Contact = () => (
  <footer className="py-20 md:py-28 border-t border-border">
    <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-serif-display mb-8">Contact</h2>
        <div className="space-y-2 font-body text-sm">
          <p>
            <a
              href="mailto:ezzedinehassibkevin@gmail.com"
              className="text-foreground hover:text-primary transition-colors duration-200 border-b border-transparent hover:border-primary"
            >
              ezzedinehassibkevin@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://linkedin.com/in/hassib-kevinezzedine-557b87214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200 border-b border-transparent hover:border-primary"
            >
              linkedin.com/in/hassib-kevinezzedine-557b87214
            </a>
          </p>
        </div>
        <p className="mt-8 text-sm text-muted-foreground font-body">
          Open to research collaborations and internship opportunities.
        </p>
      </AnimatedSection>
    </div>
  </footer>
);

export default Contact;
