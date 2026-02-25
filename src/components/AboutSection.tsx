import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 relative noise-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl gradient-text mb-8 tracking-tight">
            Sobre Rizoma
          </h2>

          <div className="space-y-6 text-foreground/80 font-body text-base sm:text-lg leading-relaxed">
            <p>
              Rizoma nace como un espacio sin centro ni jerarquía. Como la red subterránea
              que conecta raíces bajo la tierra, creemos en los vínculos horizontales:
              cada persona es un nodo, cada encuentro una nueva conexión.
            </p>
            <p>
              No somos una marca ni un producto. Somos un tejido vivo de gente que se
              reconoce en lo común: la música que no suena en la radio, las palabras que
              no caben en los titulares, la cultura que crece desde abajo.
            </p>
            <p className="text-primary font-medium">
              Frente a un mundo que nos separa, nosotros elegimos encontrarnos.
            </p>
          </div>

          {/* Decorative line */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
            <span className="text-primary text-xs font-body tracking-[0.3em] uppercase">rizoma</span>
            <div className="h-px flex-1 bg-gradient-to-l from-secondary/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
