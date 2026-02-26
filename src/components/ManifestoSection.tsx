import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ManifestoSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <motion.div className="container mx-auto px-6" style={{ y }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative border-l-2 border-primary/40 pl-6 sm:pl-10"
          >
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary rounded-full" />
            <p className="font-body text-foreground/75 text-base sm:text-lg leading-relaxed mb-6">
              En un mundo cada vez más homogéneo, donde el avance quimérico del neoliberalismo
              parece no tener fin. Bajo un sistema que nos conduce a sociedades cada vez más
              individualizadas en las que nuestro tiempo se divide entre tiempo de trabajo y de
              consumo compulsivo. Dentro de una economía en la que nuestra atención y nuestro
              pensamiento son constantemente instrumentalizados y manipulados por grandes
              compañías para sacar beneficio.
            </p>
            <p className="font-body text-foreground/75 text-base sm:text-lg leading-relaxed mb-6">
              <span className="text-primary font-medium">Rizoma se atreve a imaginar un espacio que cuestione esa lógica</span>,
              en el que celebrar los lazos de solidaridad que tejen a un pueblo crítico capaz de
              resistir y hacer frente. Celebramos la complicidad que solo se puede dar cuando
              reconoces a tus iguales. Cuando no los ves como máquinas de producir y consumir
              sino como partes heterogéneas de un todo que acaba siendo más que la suma de sus
              componentes.
            </p>
            <p className="font-body text-foreground/75 text-base sm:text-lg leading-relaxed mb-6">
              Por eso desde Rizoma estamos organizando este evento en el que ofrecer una
              plataforma para escuchar las voces que nunca aparecerán en los libros de
              historia, de música, de literatura o de filosofía, pero que expresan la
              pluralidad de un pueblo capaz de desplumar a un gallo que piensa que el corral
              es suyo.
            </p>
            <p className="font-body text-primary/90 text-base sm:text-lg leading-relaxed italic">
              Si algo de esto resuena contigo o si simplemente tienes curiosidad, o si te
              apetece pasar un buen rato con buena gente, estáis invitados a formar parte del
              florecimiento de esta plataforma el 4 de Abril en el Módulo Azul en nuestra
              fiesta de la primavera.
            </p>
            <div className="absolute -left-[5px] bottom-0 w-2 h-2 bg-secondary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ManifestoSection;
