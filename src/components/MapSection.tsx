import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MAP_CENTER: [number, number] = [37.1220, -5.4520];

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: MAP_CENTER,
      zoom: 16,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
    }).addTo(map);

    const icon = L.divIcon({
      html: `<div style="background:hsl(82 100% 50%);width:16px;height:16px;border-radius:50%;border:3px solid hsl(240 10% 4%);box-shadow:0 0 12px hsl(82 100% 50%/0.6)"></div>`,
      className: "",
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });

    L.marker(MAP_CENTER, { icon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family:'Space Grotesk',sans-serif;text-align:center;padding:4px">
          <strong style="font-family:'Syne',sans-serif">Módulo Azul</strong><br/>
          <span style="font-size:12px;color:#888">Morón de la Frontera</span><br/>
          <a href="https://maps.app.goo.gl/ZKzKJEkDE9WRhbiU8" target="_blank" rel="noopener noreferrer" style="font-size:12px;color:hsl(82 100% 50%)">Abrir en Google Maps →</a>
        </div>`
      );

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-2 text-center">
            📍 Cómo llegar
          </h3>
          <p className="text-muted-foreground font-body text-sm mb-6 text-center">
            Módulo Azul, Morón de la Frontera
          </p>
          <div
            ref={mapRef}
            className="w-full h-[300px] sm:h-[400px] border border-border overflow-hidden"
            style={{ borderRadius: "var(--radius)" }}
          />
          <p className="text-center mt-3">
            <a
              href="https://maps.app.goo.gl/ZKzKJEkDE9WRhbiU8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-body text-sm hover:underline"
            >
              Abrir en Google Maps →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
