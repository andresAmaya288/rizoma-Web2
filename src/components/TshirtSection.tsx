import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";

import tshirt1Front from "@/assets/tshirt-1-front.jpg";
import tshirt1Back from "@/assets/tshirt-1-back.jpg";
import tshirt2Front from "@/assets/tshirt-2-front.jpg";
import tshirt2Back from "@/assets/tshirt-2-back.jpg";
import tshirt3Front from "@/assets/tshirt-3-front.jpg";
import tshirt3Back from "@/assets/tshirt-3-back.jpg";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwcc_LD_RocJjCD1q5VW8ceKsKkyF5iDM2mEpdseqSrktC1Z5iY4BtTeMPzMqsVsdI/exec";

const models = [
  { name: "Rizoma Negra", front: tshirt1Front, back: tshirt1Back },
  { name: "Rizoma Blanca", front: tshirt2Front, back: tshirt2Back },
  { name: "Rizoma Verde", front: tshirt3Front, back: tshirt3Back },
];

const reservaSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Máx. 100 caracteres"),
  email: z.string().trim().email("Introduce un email válido").max(255),
  modelo: z.string(),
  talla: z.string(),
  cantidad: z.string(),
});

type FormErrors = Partial<Record<keyof z.infer<typeof reservaSchema>, string>>;

const TshirtSection = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    modelo: models[0].name,
    talla: "M",
    cantidad: "1",
  });

  const updateField = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = reservaSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const formData = {
      timestamp: new Date().toISOString(),
      model: form.modelo,
      size: form.talla,
      quantity: form.cantidad,
      name: form.nombre,
      email: form.email,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      const detail = `${formData.quantity} camiseta(s) — ${formData.model} — Talla ${formData.size}`;
      setConfirmed(detail);
      toast.success("¡Reserva recibida! Te esperamos en el evento.", { duration: 5000 });
      setForm({ nombre: "", email: "", modelo: models[0].name, talla: "M", cantidad: "1" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Hubo un error en la reserva. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-card border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
      errors[field] ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
    }`;

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
            Lleva el rizoma contigo. Recoge y paga en efectivo en el evento.
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
          {confirmed ? (
            <div className="text-center space-y-4 py-6 border border-primary/30 bg-primary/5 p-6">
              <div className="text-4xl">✅</div>
              <h4 className="font-display font-bold text-lg text-primary">¡Reserva confirmada!</h4>
              <p className="text-muted-foreground font-body text-sm">{confirmed}</p>
              <p className="text-muted-foreground font-body text-xs">Te esperamos en el evento para recogerla.</p>
              <button
                type="button"
                onClick={() => setConfirmed(null)}
                className="text-primary text-sm font-body underline hover:text-primary/80 transition-colors"
              >
                Hacer otra reserva
              </button>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={(e) => updateField("nombre", e.target.value)}
                    className={inputClass("nombre")}
                  />
                  {errors.nombre && <p className="text-destructive text-xs font-body mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={inputClass("email")}
                  />
                  {errors.email && <p className="text-destructive text-xs font-body mt-1">{errors.email}</p>}
                </div>
                <select
                  value={form.modelo}
                  onChange={(e) => updateField("modelo", e.target.value)}
                  className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  {models.map((m) => (
                    <option key={m.name} value={m.name}>{m.name}</option>
                  ))}
                </select>
                <div className="flex gap-4">
                  <select
                    value={form.talla}
                    onChange={(e) => updateField("talla", e.target.value)}
                    className="flex-1 bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    {["S", "M", "L", "XL"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <select
                    value={form.cantidad}
                    onChange={(e) => updateField("cantidad", e.target.value)}
                    className="w-24 bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={String(n)}>{n}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full font-display font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground py-4 hover:shadow-[0_0_30px_hsl(82_100%_50%/0.4)] transition-all duration-300 disabled:opacity-50"
                >
                  {submitting ? "Enviando..." : "Reservar camiseta"}
                </button>
              </form>
              <p className="text-muted-foreground text-xs font-body mt-3">
                Recogida y pago <span className="text-secondary font-medium">en efectivo</span> en el evento.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TshirtSection;
