import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const schedule = [
  { time: "Todo el día", event: "Mercadillo local", icon: "🛍️" },
  { time: "Tarde / Noche", event: "Actuaciones en vivo", icon: "🎤" },
  { time: "Noche", event: "DJs", icon: "🎧" },
  { time: "Momento destacado", event: "Micro abierto de poesía", icon: "✍️" },
];

const EventSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const [manifestoOpen, setManifestoOpen] = useState(false);

  return (
    <section id="evento" ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl gradient-text mb-4 tracking-tight text-center">
            El evento
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg mb-8 max-w-2xl mx-auto text-center">
            Una jornada completa de cultura, comunidad y celebración.
          </p>
        </motion.div>

        {/* Manifesto — collapsible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <button
            onClick={() => setManifestoOpen(!manifestoOpen)}
            className="w-full flex items-center justify-between gap-4 py-3 px-1 group cursor-pointer"
          >
            <span className="font-display font-bold text-base sm:text-lg text-foreground/80 group-hover:text-primary transition-colors">
              Nuestro manifiesto
            </span>
            <motion.span
              animate={{ rotate: manifestoOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary text-xl"
            >
              ▾
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {manifestoOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="relative border-l-2 border-primary/40 pl-6 sm:pl-10 pt-4 pb-2">
                  <div className="absolute -left-[5px] top-4 w-2 h-2 bg-primary rounded-full" />
                  <p className="font-body text-foreground/75 text-sm sm:text-base leading-relaxed mb-4">
                    En un mundo cada vez más homogéneo, donde el avance quimérico del neoliberalismo
                    parece no tener fin. Bajo un sistema que nos conduce a sociedades cada vez más
                    individualizadas en las que nuestro tiempo se divide entre tiempo de trabajo y de
                    consumo compulsivo. Dentro de una economía en la que nuestra atención y nuestro
                    pensamiento son constantemente instrumentalizados y manipulados por grandes
                    compañías para sacar beneficio.
                  </p>
                  <p className="font-body text-foreground/75 text-sm sm:text-base leading-relaxed mb-4">
                    <span className="text-primary font-medium">Rizoma se atreve a imaginar un espacio que cuestione esa lógica</span>,
                    en el que celebrar los lazos de solidaridad que tejen a un pueblo crítico capaz de
                    resistir y hacer frente. Celebramos la complicidad que solo se puede dar cuando
                    reconoces a tus iguales.
                  </p>
                  <p className="font-body text-foreground/75 text-sm sm:text-base leading-relaxed mb-4">
                    Por eso desde Rizoma estamos organizando este evento en el que ofrecer una
                    plataforma para escuchar las voces que nunca aparecerán en los libros de
                    historia, de música, de literatura o de filosofía, pero que expresan la
                    pluralidad de un pueblo capaz de desplumar a un gallo que piensa que el corral
                    es suyo.
                  </p>
                  <p className="font-body text-primary/90 text-sm sm:text-base leading-relaxed italic">
                    Si algo de esto resuena contigo o si simplemente tienes curiosidad, o si te
                    apetece pasar un buen rato con buena gente, estáis invitados a formar parte del
                    florecimiento de esta plataforma el 4 de Abril en el CSO Julio Vélez en nuestra
                    fiesta de la primavera.
                  </p>
                  <div className="absolute -left-[5px] bottom-2 w-2 h-2 bg-secondary rounded-full" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info cards with parallax */}
        <motion.div style={{ y }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border p-6 border-glow"
          >
            <span className="text-2xl mb-2 block">📍</span>
            <p className="font-display font-bold text-lg text-foreground">CSO Julio Vélez</p>
            <p className="text-muted-foreground font-body text-sm">Pasaje Ote., Morón de la Frontera</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border p-6 border-glow"
          >
            <span className="text-2xl mb-2 block">📅</span>
            <p className="font-display font-bold text-lg text-foreground">4 de abril</p>
            <p className="text-muted-foreground font-body text-sm">De día a noche</p>
          </motion.div>
        </motion.div>

        {/* Schedule */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="font-display font-bold text-xl text-foreground mb-6 text-center">Programación</h3>
          <div className="space-y-3">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="font-body font-medium text-foreground">{item.event}</p>
                  <p className="text-muted-foreground text-sm">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notices */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 bg-muted/50 border border-border px-5 py-3 font-body text-sm text-foreground/80">
            <span>🍽️</span> Comida y bebida a precios populares
          </div>
          <div className="flex items-center gap-3 bg-muted/50 border border-border px-5 py-3 font-body text-sm text-secondary font-medium">
            <span>⚠️</span> Todos los pagos se realizarán en efectivo
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
