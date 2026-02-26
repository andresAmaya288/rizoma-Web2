import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const TARGET_DATE = new Date("2025-04-04T18:00:00").getTime();

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
};

const Hero = () => {
  const countdown = useCountdown();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt="Rizoma - red horizontal de conexiones abstractas"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </motion.div>

      <motion.div className="relative z-10 container mx-auto px-6 text-center" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-4">
            <span className="gradient-text">RIZOMA</span>
          </h1>
          <p className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-foreground/90 tracking-wide uppercase mb-8">
            Fiesta de la Primavera
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center gap-4 sm:gap-6 mb-8"
        >
          {[
            { value: countdown.days, label: "días" },
            { value: countdown.hours, label: "hrs" },
            { value: countdown.minutes, label: "min" },
            { value: countdown.seconds, label: "seg" },
          ].map((unit) => (
            <div key={unit.label} className="text-center">
              <div className="font-display font-extrabold text-2xl sm:text-4xl gradient-text leading-none">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {unit.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground font-body text-sm sm:text-base mb-6"
        >
          <span className="flex items-center gap-2">
            <span className="text-primary">📅</span> 4 de abril
          </span>
          <span className="hidden sm:block text-border">|</span>
          <span className="flex items-center gap-2">
            <span className="text-primary">📍</span> Módulo Azul, Morón de la Frontera
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-xl mx-auto text-muted-foreground font-body text-sm sm:text-base leading-relaxed mb-10 italic"
        >
          Donde las raíces no buscan profundidad, sino conexión.
          Un espacio para las voces que florecen al margen,
          para el pueblo que se reconoce y celebra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#evento"
            className="inline-block font-display font-bold text-lg px-10 py-4 bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(82_100%_50%/0.4)] transition-all duration-300 tracking-wider uppercase"
          >
            Quiero venir
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
