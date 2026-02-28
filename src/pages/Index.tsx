import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EventSection from "@/components/EventSection";
import ArtistsSection from "@/components/ArtistsSection";
import MapSection from "@/components/MapSection";
import TshirtSection from "@/components/TshirtSection";
import FooterSection from "@/components/FooterSection";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Evento", href: "#evento" },
  { label: "Artistas", href: "#artistas" },
  { label: "Camisetas", href: "#camisetas" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 flex items-center justify-between h-14">
          <a href="#" className="font-display font-extrabold text-lg gradient-text tracking-tight">
            RIZOMA
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#evento"
              className="font-body text-xs font-medium bg-primary text-primary-foreground px-4 py-2 uppercase tracking-wider hover:shadow-[0_0_20px_hsl(82_100%_50%/0.3)] transition-all"
            >
              Quiero ir
            </a>

            {/* Hamburger button - mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menú de navegación"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-foreground origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-0.5 bg-foreground"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-foreground origin-center"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border/50"
            >
              <div className="flex flex-col items-center gap-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Hero />
      <AboutSection />
      <EventSection />
      <ArtistsSection />
      <MapSection />
      <TshirtSection />
      <FooterSection />
    </main>
  );
};

export default Index;
