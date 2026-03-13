import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import kp530Img from "@/assets/kp530.png";
import oihanImg from "@/assets/oihan.jpg";
import lgndImg from "@/assets/lgnd.jpg";
import dinnoImg from "@/assets/dinno.jpg";

const artists = [
  {
    name: "KP530",
    bio: "Rap crudo y directo desde las calles. Letras que golpean con la honestidad de quien ha vivido lo que cuenta.",
    image: kp530Img,
  },
  {
    name: "Oihan",
    bio: "Versos afilados y flow contundente. Una voz que rompe moldes y construye puentes entre lo urbano y lo poético.",
    image: oihanImg,
  },
  {
    name: "LGND",
    bio: "Melodías que se te clavan y barras que no piden permiso. Una propuesta fresca donde lo callejero se encuentra con lo melódico.",
    image: lgndImg,
  },
  {
    name: "Dinno",
    bio: "Energía pura sobre el escenario. Un directo que atrapa desde el primer compás y no suelta hasta el último verso.",
    image: dinnoImg,
  },
];

const ArtistsSection = () => {
  return (
    <section id="artistas" className="py-24 md:py-32 relative noise-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl gradient-text mb-4 tracking-tight text-center">
            Artistas
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg mb-12 max-w-2xl mx-auto text-center">
            Las voces que no aparecen en los libros pero que resuenan en el pueblo.
          </p>
        </motion.div>

        {/* Artist grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-3xl mx-auto [&>*]:w-[calc(50%-12px)] sm:[&>*]:w-[calc(33.333%-22px)]">
          {artists.map((artist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-4 aspect-square">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale sm:grayscale sm:group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {artist.name}
              </h3>
              <p className="text-muted-foreground text-sm font-body mt-1 leading-relaxed">
                {artist.bio}
              </p>
            </motion.div>
          ))}

          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: artists.length * 0.15 }}
            className="group"
          >
            <div className="relative overflow-hidden mb-4 aspect-square border border-dashed border-primary/30 flex flex-col items-center justify-center bg-card/30 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center mb-3 group-hover:border-primary/70 transition-colors">
                <Plus className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
              </div>
              <span className="font-display font-bold text-sm text-primary/60 group-hover:text-primary transition-colors tracking-wide uppercase">
                Próximamente
              </span>
            </div>
            <h3 className="font-display font-bold text-lg text-muted-foreground/50">
              Y más…
            </h3>
            <p className="text-muted-foreground/40 text-sm font-body mt-1 leading-relaxed">
              Artistas por confirmar. Mantente atento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
