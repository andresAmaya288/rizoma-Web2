import { motion } from "framer-motion";

const PlaylistSection = () => {
  return (
    <section className="py-16 md:py-24 relative noise-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl gradient-text mb-3 tracking-tight text-center">
            Escúchanos
          </h2>
          <p className="text-muted-foreground font-body text-sm sm:text-base mb-10 max-w-lg mx-auto text-center">
            Descubre a los artistas y entra en calor antes de la fiesta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
              <span>🎵</span> Conoce a los artistas
            </h3>
            <div className="bg-card border border-border p-3 rounded-sm">
              <iframe
                title="Conoce a los artistas - Playlist Spotify"
                src="https://open.spotify.com/embed/playlist/1Zy3LB0vvr5k2S5hqz5tcK?theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-sm"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
              <span>🔥</span> Warm up Rizoma
            </h3>
            <div className="bg-card border border-border p-3 rounded-sm">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;
