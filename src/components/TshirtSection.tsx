import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import tshirt1Front from "@/assets/tshirt-1-front.jpg";
import tshirt1Back from "@/assets/tshirt-1-back.jpg";
import tshirt2Front from "@/assets/tshirt-2-front.jpg";
import tshirt2Back from "@/assets/tshirt-2-back.jpg";
import tshirt3Front from "@/assets/tshirt-3-front.jpg";
import tshirt3Back from "@/assets/tshirt-3-back.jpg";

const models = [
  { name: "Rizoma Negra", front: tshirt1Front, back: tshirt1Back },
  { name: "Rizoma Blanca", front: tshirt2Front, back: tshirt2Back },
  { name: "Rizoma Verde", front: tshirt3Front, back: tshirt3Back },
];

const TshirtSection = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    modelo: models[0].name,
    talla: "M",
    cantidad: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Reserva recibida! Te esperamos en el evento para recogerla.", {
      duration: 5000,
    });
    setForm({ nombre: "", email: "", modelo: models[0].name, talla: "M", cantidad: "1" });
  };

  return (
    <section id="camisetas" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl gradient-text mb-4 tracking-tight text-center">
            Camisetas
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg mb-12 max-w-2xl mx-auto text-center">
            Lleva el rizoma contigo. Reserva sin compromiso, recoge en el evento.
          </p>
        </motion.div>

        {/* T-shirt models */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cursor-pointer group"
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors">
                <img
                  src={flipped === i ? model.back : model.front}
                  alt={`${model.name} - ${flipped === i ? "trasera" : "frontal"}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="font-display font-bold text-foreground">{model.name}</p>
                  <p className="text-muted-foreground text-xs font-body">
                    Toca para ver {flipped === i ? "frontal" : "trasera"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reservation form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <h3 className="font-display font-bold text-xl text-foreground mb-6">Reservar camiseta</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <select
              value={form.modelo}
              onChange={(e) => setForm({ ...form, modelo: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              {models.map((m) => (
                <option key={m.name} value={m.name}>{m.name}</option>
              ))}
            </select>
            <div className="flex gap-4">
              <select
                value={form.talla}
                onChange={(e) => setForm({ ...form, talla: e.target.value })}
                className="flex-1 bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                {["S", "M", "L", "XL"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <select
                value={form.cantidad}
                onChange={(e) => setForm({ ...form, cantidad: e.target.value })}
                className="w-24 bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={String(n)}>{n}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full font-display font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground py-4 hover:shadow-[0_0_30px_hsl(82_100%_50%/0.4)] transition-all duration-300"
            >
              Reservar camiseta
            </button>
          </form>
          <p className="text-muted-foreground text-xs font-body mt-3">
            Reserva sin pago. Recogida en el evento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TshirtSection;
