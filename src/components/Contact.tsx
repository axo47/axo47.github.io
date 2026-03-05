import AnimatedSection from "./AnimatedSection";

const Contact = () => (
  <footer id="contact" className="py-20 md:py-28 border-t border-border relative">
    <div className="container mx-auto px-6 md:px-12 text-center">
      <AnimatedSection>
        <blockquote className="font-academic italic text-xl md:text-2xl text-foreground max-w-lg mx-auto leading-relaxed">
          "The only way to learn mathematics is to do mathematics."
        </blockquote>
        <p className="font-mono-math text-xs text-muted-foreground mt-3">— Paul Halmos</p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="mt-12 font-mono-math text-xs text-muted-foreground space-y-1">
          <p>
            <a
              href="mailto:ezzedinehassibkevin@gmail.com"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              ezzedinehassibkevin@gmail.com
            </a>
            <span className="mx-2">·</span>
            <a
              href="https://linkedin.com/in/hassib-kevinezzedine-557b87214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              linkedin.com/in/hassib-kevinezzedine-557b87214
            </a>
          </p>
        </div>
      </AnimatedSection>
    </div>

  </footer>
);

export default Contact;
