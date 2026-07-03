import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Clock, MapPin, Users, Package, Truck } from "lucide-react";

const serif = { fontFamily: "'DM Serif Display', serif" };

const heroImage =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=700&fit=crop&auto=format";

const moverServices = [
  { icon: "🏠", title: "Home Shifting", desc: "Complete home relocation with careful packing, loading, transport, and unpacking at your new place." },
  { icon: "🏢", title: "Office Relocation", desc: "Minimal downtime office moves — we handle furniture, electronics, files, and IT equipment." },
  { icon: "🚛", title: "Long Distance Moving", desc: "Intercity and interstate moving with secure packing, GPS tracking, and timely delivery." },
  { icon: "📦", title: "Parcel & Goods Delivery", desc: "Safe, timely parcel delivery with proper arrangement — delivered to your doorstep intact." },
  { icon: "📦", title: "Packing & Unpacking", desc: "Professional packing using high-quality materials — bubble wrap, boxes, tape, and more." },
  { icon: "🪑", title: "Furniture Dismantling & Assembly", desc: "Expert dismantling and reassembly of all types of furniture — beds, wardrobes, sofas, tables." },
  { icon: "🧰", title: "Loading & Unloading", desc: "Skilled labour for quick and careful loading and unloading of goods at both ends." },
  { icon: "🏍️", title: "Bike Transportation", desc: "Safe transport of motorcycles and scooters within the city and to other cities." },
  { icon: "🚗", title: "Car Transportation", desc: "Reliable car shifting services with insurance coverage and secure loading." },
  { icon: "🏪", title: "Shop & Commercial Shifting", desc: "Full-service commercial moving for shops, restaurants, clinics, and small businesses." },
];

const whyChooseUs = [
  { icon: Users, label: "Professional Team", desc: "Trained and experienced moving professionals." },
  { icon: Package, label: "Safe Packing", desc: "Premium packing materials for complete protection." },
  { icon: Shield, label: "Affordable Pricing", desc: "Transparent rates with no hidden charges." },
  { icon: MapPin, label: "GPS Tracking", desc: "Real-time tracking of your goods in transit." },
  { icon: Truck, label: "Door-to-Door Service", desc: "Complete pickup-to-drop convenience with proper placement of every item." },
  { icon: Package, label: "Careful Arrangement", desc: "Furniture and goods arranged exactly as you specify at the destination." },
  { icon: Clock, label: "Available 24/7", desc: "Round-the-clock support for urgent moves." },
];

const process = [
  { step: "01", title: "Contact Us", desc: "Call or WhatsApp us with your moving requirements." },
  { step: "02", title: "Free Inspection", desc: "We visit your location for a free estimate and assessment." },
  { step: "03", title: "Packing", desc: "Our team professionally packs all your belongings." },
  { step: "04", title: "Transportation", desc: "Goods are loaded and transported safely to the destination." },
  { step: "05", title: "Delivery", desc: "Items arrive on time, are unloaded with care, and placed exactly where you want them in your new space." },
  { step: "06", title: "Unpacking", desc: "We unpack everything, arrange furniture and belongings properly, and make sure your place feels like home from day one." },
];

export default function MoversPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Moving Services"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6"
            style={{ background: "rgba(255,255,255,0.12)", color: "#fff", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Truck size={14} /> MOVERS
          </motion.div>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-tight"
            style={serif}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            Safe. Fast. Reliable.
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Home Moving · Office Shifting · Long Distance · Parcel Delivery
          </motion.p>
          <motion.p
            className="text-sm md:text-base text-white/60 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Moving made simple with trained professionals, secure packing, careful transportation, and on-time delivery.
          </motion.p>
          <motion.a
            href="tel:+918098468061"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90"
            style={{ background: "#fff", color: "#000" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={20} /> Book Now
          </motion.a>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#6B7280" }}>
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ ...serif, color: "#000" }}>
              Complete Moving Solutions
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {moverServices.map((service, i) => (
              <motion.div
                key={service.title}
                className="group rounded-xl p-5 border transition-all"
                style={{
                  background: "#fff",
                  borderColor: "rgba(0,0,0,0.06)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, borderColor: "rgba(0,0,0,0.15)" }}
              >
                <div className="text-2xl mb-3">{service.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ ...serif, color: "#000" }}>
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#6B7280" }}>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ ...serif, color: "#000" }}>
              Trusted Moving Partners
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ background: "#fff" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "#000" }}
                  >
                    <Icon size={18} color="#fff" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1" style={{ color: "#000" }}>
                      {item.label}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#6B7280" }}>
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ ...serif, color: "#000" }}>
              Our Moving Process
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: "rgba(0,0,0,0.1)" }} />

            <div className="space-y-8 md:space-y-0">
              {process.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="relative md:flex items-start gap-8 md:pb-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="hidden md:flex items-center justify-center w-16 shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: "#000", color: "#fff" }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <div className="md:hidden flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#000", color: "#fff" }}
                    >
                      {i + 1}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                      {step.step}
                    </div>
                  </div>

                  <div className="flex-1 md:pt-1.5">
                    <h3 className="text-lg font-bold mb-1" style={{ ...serif, color: "#000" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                      {step.desc}
                    </p>
                  </div>

                  {i < process.length - 1 && (
                    <div className="hidden md:flex justify-center py-2">
                      <ArrowRight size={16} style={{ color: "rgba(0,0,0,0.2)" }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#111" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              <Truck size={14} /> Need to Move?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...serif, color: "#fff" }}>
              Let's Get You Moving
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              Call us today for a free quote and inspection. We handle everything from start to finish.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href="tel:+918098468061"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "#fff", color: "#111" }}
              >
                <Phone size={20} /> +91 80984 68061
              </a>
            </div>

            <a
              href="tel:+918098468061"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              Book Now <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
