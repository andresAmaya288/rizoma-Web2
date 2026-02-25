import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EventSection from "@/components/EventSection";
import ArtistsSection from "@/components/ArtistsSection";
import TshirtSection from "@/components/TshirtSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 flex items-center justify-between h-14">
          <a href="#" className="font-display font-extrabold text-lg gradient-text tracking-tight">
            RIZOMA
          </a>
          <div className="hidden sm:flex items-center gap-6">
            {[
              { label: "Sobre", href: "#sobre" },
              { label: "Evento", href: "#evento" },
              { label: "Artistas", href: "#artistas" },
              { label: "Camisetas", href: "#camisetas" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#evento"
            className="font-body text-xs font-medium bg-primary text-primary-foreground px-4 py-2 uppercase tracking-wider hover:shadow-[0_0_20px_hsl(82_100%_50%/0.3)] transition-all"
          >
            Quiero ir
          </a>
        </div>
      </nav>

      <Hero />
      <AboutSection />
      <EventSection />
      <ArtistsSection />
      <TshirtSection />
      <FooterSection />
    </main>
  );
};

export default Index;
