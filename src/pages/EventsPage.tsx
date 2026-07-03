import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const serif = { fontFamily: "'DM Serif Display', serif" };

const heroImage =
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1400&h=700&fit=crop&auto=format";

const eventServices = [
  {
    title: "Wedding Decoration",
    desc: "Elegant stage setups, floral arrangements, lighting, and themed decor for unforgettable weddings.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Birthday Parties",
    desc: "Custom-themed birthday decorations with balloons, banners, cake tables, and photo zones.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Corporate Events",
    desc: "Professional conference setups, stage design, AV equipment, and branding for corporate gatherings.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Housewarming",
    desc: "Warm and welcoming decor for new homes — garlands, rangoli, lighting, and refreshment setups.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&h=400&fit=crop&auto=format",
  },
];

export default function EventsPage() {
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
          alt="Event Management"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
            style={serif}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            Event Management
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            From intimate celebrations to grand occasions — we craft every moment with care, creativity, and precision.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
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
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ ...serif, color: "#000" }}>
              Our Event Services
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventServices.map((service, i) => (
              <motion.div
                key={service.title}
                className="group rounded-2xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2" style={serif}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-3 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Enquire Now <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 md:py-32" style={{ background: "#F5F5F5" }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ ...serif, color: "#000" }}>
              Why Choose Us for Your Event?
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
              We bring your vision to life with end-to-end event management — from concept to execution.
              Our team handles every detail so you can enjoy your special moment stress-free.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Events Executed", value: "100+" },
              { label: "Happy Clients", value: "250+" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-1" style={{ ...serif, color: "#000" }}>
                  {item.value}
                </div>
                <div className="text-sm" style={{ color: "#6B7280" }}>{item.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="#000" color="#000" />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
