const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
            <a
              href="#sobre"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Quiénes somos
            </a>
            <a
              href="#evento"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Evento
            </a>
            <a
              href="#artistas"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Artistas
            </a>
            <a
              href="https://maps.app.goo.gl/ZKzKJEkDE9WRhbiU8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Cómo llegar
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/rizoma.moron/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-foreground/70 hover:text-primary transition-colors font-body text-sm uppercase tracking-wider font-medium"
            >
              @rizoma.moron
            </a>
          </div>

          {/* Evocative message */}
          <p className="text-foreground/60 font-body text-sm leading-relaxed max-w-lg mx-auto mb-8 italic text-center">
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

          <p className="text-muted-foreground/40 font-body text-xs text-center">
            Cultura viva desde abajo · Morón de la Frontera · 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
