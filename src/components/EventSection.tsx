import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
          <p className="text-muted-foreground font-body text-base sm:text-lg mb-12 max-w-2xl mx-auto text-center">
            Una jornada completa de cultura, comunidad y celebración.
          </p>
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
            <p className="font-display font-bold text-lg text-foreground">Módulo Azul</p>
            <p className="text-muted-foreground font-body text-sm">Morón de la Frontera</p>
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
