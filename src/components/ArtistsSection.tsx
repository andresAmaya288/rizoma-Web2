import { motion } from "framer-motion";

const artists = [
  {
    name: "Artista 1",
    bio: "Sonidos electrónicos que desdibujan fronteras entre lo orgánico y lo digital.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
  },
  {
    name: "Artista 2",
    bio: "Poesía sonora desde los márgenes, versos que se bailan y silencios que se escuchan.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
  },
  {
    name: "Artista 3",
    bio: "Beats crudos y melodías encontradas en la calle. El underground como lengua materna.",
    image: "https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=400&h=400&fit=crop",
  },
  {
    name: "Artista 4",
    bio: "Fusión de raíces flamencas con texturas contemporáneas. Tradición hecha futuro.",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=400&fit=crop",
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
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl gradient-text mb-4 tracking-tight">
            Artistas
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg mb-12 max-w-2xl">
            Las voces que no aparecen en los libros pero que resuenan en el pueblo.
          </p>
        </motion.div>

        {/* Artist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {artists.map((artist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
        <div className="space-y-8 max-w-2xl">
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-4">🎵 Conoce a lxs artistas</h3>
            <div className="bg-card border border-border p-4 rounded-sm">
              <iframe
                title="Conoce a lxs artistas - Playlist Spotify"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?theme=0"
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
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?theme=0"
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
