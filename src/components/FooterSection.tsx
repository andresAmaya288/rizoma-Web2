const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Social links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/rizoma.moron/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm uppercase tracking-wider"
            >
              Instagram
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm uppercase tracking-wider"
            >
              Twitter / X
            </a>
          </div>

          {/* Evocative message */}
          <p className="text-foreground/60 font-body text-sm leading-relaxed max-w-lg mx-auto mb-8 italic">
            "No somos la suma de nuestras partes.
            Somos la red que se teje entre ellas.
            Nos vemos donde florecen las raíces."
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="gradient-text font-display font-bold text-sm tracking-[0.2em]">RIZOMA</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/40" />
          </div>

          <p className="text-muted-foreground/40 font-body text-xs">
            Cultura viva desde abajo · Morón de la Frontera · 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
