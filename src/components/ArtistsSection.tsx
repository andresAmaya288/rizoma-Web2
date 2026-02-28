import { motion } from "framer-motion";
import kp530Img from "@/assets/kp530.png";
import oihanImg from "@/assets/oihan.jpg";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
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
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
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
        </div>

        {/* Spotify embeds */}
        <div className="space-y-8 max-w-2xl mx-auto">
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">🎵 Conoce a lxs artistas</h3>
            <div className="bg-card border border-border p-4 rounded-sm">
              <iframe
                title="Conoce a lxs artistas - Playlist Spotify"
                src="https://open.spotify.com/embed/playlist/1Zy3LB0vvr5k2S5hqz5tcK?theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-sm"
              />
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">🔥 Warm up Rizoma</h3>
            <div className="bg-card border border-border p-4 rounded-sm">
              <iframe
                title="Warm up Rizoma - Playlist Spotify"
                src="https://open.spotify.com/embed/playlist/4jgcq8MwENRHUjzTPuR1mE?theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
