import { motion } from "framer-motion";
import { Phone, ArrowRight, Clock, Shield, Users, Heart, Star } from "lucide-react";

const serif = { fontFamily: "'DM Serif Display', serif" };

const heroImage =
  "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1400&h=700&fit=crop&auto=format";

const funeralServices = [
  { icon: "🧊", title: "Freezer Box Rental", desc: "Hygeinic and well-maintained freezer boxes available 24/7 for immediate use." },
  { icon: "🚑", title: "Ambulance Service", desc: "Emergency ambulance with trained staff for quick and respectful patient transport." },
  { icon: "🚐", title: "Funeral Vehicle", desc: "Dedicated funeral vehicles for dignified transportation of the departed." },
  { icon: "👨", title: "Funeral Manpower", desc: "Experienced manpower for all funeral-related tasks and arrangements." },
  { icon: "🪦", title: "Burial Arrangement", desc: "Complete burial coordination including grave preparation and cemetery formalities." },
  { icon: "🔥", title: "Cremation Arrangement", desc: "Sensitive cremation arrangements with all necessary documentation and support." },
  { icon: "🌸", title: "Floral Decoration", desc: "Respectful floral arrangements including garlands, wreaths, and flower beds." },
  { icon: "⛪", title: "Religious Ceremony Assistance", desc: "Support for all religious rites and ceremonies as per family traditions." },
  { icon: "🪑", title: "Tent & Chair Setup", desc: "Quick setup of tents, chairs, and seating arrangements for funeral gatherings." },
  { icon: "💡", title: "Lighting Arrangement", desc: "Proper lighting setup for evening and night funeral ceremonies." },
];

const features = [
  { icon: Clock, label: "Emergency Response", desc: "Immediate dispatch within minutes of your call" },
  { icon: Heart, label: "365 Days", desc: "Available every single day of the year" },
  { icon: Shield, label: "Immediate Support", desc: "Quick arrival and compassionate assistance" },
  { icon: Users, label: "Quick Arrival", desc: "Rapid response team reaches you fast" },
  { icon: Star, label: "Experienced Team", desc: "Trained professionals with years of experience" },
];

const process = [
  { step: "01", title: "Call Us", desc: "Reach our 24/7 emergency helpline — we're always awake and ready." },
  { step: "02", title: "Our Team Arrives", desc: "Our team reaches your location promptly with all necessary equipment." },
  { step: "03", title: "Freezer Box Setup", desc: "Freezer box is set up with care and dignity at the designated place." },
  { step: "04", title: "Vehicle Arrangement", desc: "Funeral vehicle or ambulance arranged as per your requirements." },
  { step: "05", title: "Ceremony Assistance", desc: "Full support during religious ceremonies, burial, or cremation." },
  { step: "06", title: "Final Support", desc: "Post-ceremony assistance including documentation and family support." },
];

export default function FuneralPage() {
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
          alt="Funeral Services"
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
            <Heart size={14} /> FUNERAL SERVICES
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
            style={serif}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            24/7 Emergency Support
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Freezer Box · Ambulance · Funeral Vehicles · Manpower
          </motion.p>
          <motion.p
            className="text-sm md:text-base text-white/60 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Providing respectful funeral arrangements with compassion, dignity, and round-the-clock support.
          </motion.p>
          <motion.a
            href="tel:+917708677454"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90"
            style={{ background: "#fff", color: "#000" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={20} /> Call Now
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
              Complete Funeral Support
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {funeralServices.map((service, i) => (
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

      {/* 24/7 Features */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#111" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              <Clock size={14} /> Available 24/7
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...serif, color: "#fff" }}>
              Always Here When You Need Us
            </h2>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>
              Emergency response · 365 days · Immediate support · Quick arrival · Experienced team
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <Icon size={18} color="#fff" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1" style={{ color: "#fff" }}>
                      {item.label}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
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
              Our Support Process
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
              <Heart size={14} /> Emergency?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...serif, color: "#fff" }}>
              We're Here 24/7
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              One call and we're on our way. Immediate support whenever you need us.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href="tel:+917708677454"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "#fff", color: "#111" }}
              >
                <Phone size={20} /> +91 77086 77454
              </a>
            </div>

            <a
              href="tel:+917708677454"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              Available 24 Hours <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
