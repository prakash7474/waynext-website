import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, Mail, MapPin, Star, ArrowRight,
  MessageCircle, Instagram, Facebook, ChevronRight,
} from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import LogoAnimation from "@/components/LogoAnimation";
import EventsPage from "@/pages/EventsPage";
import MoversPage from "@/pages/MoversPage";
import FuneralPage from "@/pages/FuneralPage";
import vikramImg from "@/imports/vikram.jpg";
import rajeshImg from "@/imports/rajesh.jpg";
import image from "@/imports/image.png";

const serif = { fontFamily: "'DM Serif Display', serif" };
const inter = { fontFamily: "'Inter', sans-serif" };

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    id: "events",
    title: "EVENTS",
    subtitle: "Wedding Decorations · Birthday · Corporate · Housewarming",
    desc: "From intimate birthday surprises to grand weddings — full decoration, stage, sound, LED walls, DJ, and more.",
    color: "#000",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700&h=520&fit=crop&auto=format",
  },
  {
    id: "movers",
    title: "MOVERS",
    subtitle: "Home Moving · Office Shifting · Long Distance · Delivery",
    desc: "Professional movers and packers for homes and offices — local and long-distance, handled with care.",
    color: "#000",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=520&fit=crop&auto=format",
  },
  {
    id: "funeral",
    title: "FUNERAL",
    subtitle: "24/7 Emergency · Freezer Box · Manpower · Vehicles",
    desc: "Round-the-clock compassionate support — freezer boxes, manpower, lighting, and vehicle arrangements.",
    color: "#000",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=700&h=520&fit=crop&auto=format",
  },
];

const stats = [
  { value: 250, suffix: "+", label: "Happy Clients" },
  { value: 1, suffix: "", label: "Year Experience" },
  { value: 3, suffix: "", label: "Professional Services" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
];

const timeline = [
  { year: "2023", event: "WayNex360 Started" },
  { year: "", event: "100 Clients" },
  { year: "", event: "200 Clients" },
  { year: "", event: "1st Anniversary" },
  { year: "", event: "250+ Happy Clients" },
];

const testimonials = [
  { name: "Priya Rajendran", role: "Wedding Client", text: "Our wedding became unforgettable. WayNex360 made every moment magical with their stunning decorations and flawless coordination.", stars: 5 },
  { name: "Arun Kumar", role: "Office Relocation", text: "Smooth and professional shifting from Nagercoil to Chennai. Not a single item was damaged. Highly recommend their movers!", stars: 5 },
  { name: "Meena Selvam", role: "Cleaning Service", text: "The deep cleaning team transformed our flat completely. Very thorough and reasonably priced. Will definitely book again.", stars: 5 },
  { name: "Sathish Raja", role: "Event Client", text: "From the stage setup to the lighting — everything was perfect. They truly care about their clients.", stars: 5 },
];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&h=600&fit=crop&auto=format", label: "Wedding", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=350&fit=crop&auto=format", label: "Cleaning" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&auto=format", label: "Movers" },
  { src: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=500&h=350&fit=crop&auto=format", label: "Funeral" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=350&fit=crop&auto=format", label: "Before / After" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=350&fit=crop&auto=format", label: "Customer Smiles" },
];

const team = [
  {
    name: "Vikram (Suriya)",
    role: "Founder",
    desc: "Always available for event planning. Vikram brings creativity and heart to every celebration, ensuring your special moments are truly unforgettable.",
    img: vikramImg,
    phone: "+918098468061",
    label: "Call Vikram",
  },
  {
    name: "Rajasekaran",
    role: "Co-Founder",
    desc: "Operations & Emergency Support. Rajasekaran ensures every service runs smoothly, with a special focus on 24/7 emergency response and logistics.",
    img: rajeshImg,
    phone: "+917708677454",
    label: "Call Rajasekaran",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: easeOut } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <motion.div
      className="text-center mb-14"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#6B7280" }}>
        {label}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold" style={{ ...serif, color: "#000" }}>
        {title}
      </h2>
    </motion.div>
  );
}

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

function ServiceCard({ s, index, onNavigate }: { s: typeof services[0]; index: number; onNavigate: (path: string) => void }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onNavigate(`/${s.id}`)}
    >
      <div className="aspect-[4/5] md:aspect-[3/4] relative">
        <img
          src={image}
          alt={s.title}
          
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="text-xs font-semibold tracking-[0.25em] text-white/70 mb-2">{s.title}</div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug" style={serif}>
            {s.subtitle}
          </h3>
          <div className="flex items-center gap-1 text-sm font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Book Now <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1600, visible);

  useEffect(() => {
    const el = document.getElementById(`stat-${label.replace(/\s/g, "")}`);
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [label]);

  return (
    <motion.div
      id={`stat-${label.replace(/\s/g, "")}`}
      className="text-center"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
    >
      <div className="text-5xl md:text-6xl font-bold mb-1" style={{ ...serif, color: "#000" }}>
        {count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-[0.15em]" style={{ color: "#6B7280" }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [overlayState, setOverlayState] = useState<'idle' | 'slide-in' | 'slide-out'>('idle');
  const [igOpen, setIgOpen] = useState(false);
  const navigate = useNavigate();

  const navigateWithTransition = useCallback((path: string) => {
    setOverlayState('slide-in');
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setOverlayState('slide-out');
        setTimeout(() => setOverlayState('idle'), 700);
      }, 80);
    }, 500);
  }, [navigate]);

  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const id = (location.state as { scrollTo?: string })?.scrollTo;
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
      window.history.replaceState({}, "");
    }
  }, [location]);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen" style={{ background: "#fff", ...inter }}>
      {showIntro && <LogoAnimation onComplete={() => setShowIntro(false)} />}

      <a
        href="https://wa.me/917708677454"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} color="#fff" />
      </a>

      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="flex items-center gap-3">
            <img src={image} alt="WayNex360" className="w-9 h-9 rounded-xl object-cover" />
            <div>
              <div className="text-base font-bold leading-none" style={{ ...serif, color: "#000" }}>
                WayNex360
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#6B7280" }}>
                Pro
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href.slice(1)); }}
                className="text-sm font-medium tracking-wide transition-colors hover:text-black/60"
                style={{ color: "#6B7280" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918098468061"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "#000", color: "#fff" }}
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            style={{ color: "#000" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="lg:hidden border-t mt-3 py-4 px-6 flex flex-col gap-4"
            style={{ background: "#fff", borderColor: "rgba(0,0,0,0.06)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href.slice(1)); }}
                className="text-base py-2 border-b font-medium transition-colors"
                style={{ color: "#000", borderColor: "rgba(0,0,0,0.06)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+918098468061"
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-full font-semibold"
              style={{ background: "#000", color: "#fff" }}
            >
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        )}
      </nav>

      <AnimatePresence>
        {overlayState !== 'idle' && (
          <motion.div
            className="fixed inset-0 z-50 bg-black"
            initial={{ y: '100%' }}
            animate={{ y: overlayState === 'slide-in' ? 0 : '-100%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => {
              if (overlayState === 'slide-out') {
                setTimeout(() => setOverlayState('idle'), 100);
              }
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<>
            <section id="home" className="min-h-screen flex items-center pt-16" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div>
                  <div className="text-2xl font-bold" style={{ ...serif, color: "#000" }}>
                    WayNex360
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase" style={{ color: "#6B7280" }}>
                    Pro
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4" style={{ ...serif, color: "#000" }}>
                Your Trusted
                <br />
                360° Service Partner
              </h1>

              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "#6B7280", maxWidth: "520px" }}>
                From celebrations to emergencies, one trusted team for every milestone.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  onClick={() => scrollTo("services")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
                  style={{ background: "#000", color: "#fff" }}
                >
                  Explore Services <ArrowRight size={18} />
                </a>
                <a
                  href="tel:+918098468061"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all border"
                  style={{ color: "#000", borderColor: "rgba(0,0,0,0.2)" }}
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>

              <div className="flex items-center gap-4 mt-10">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="#000" color="#000" />
                  ))}
                </div>
                <div className="text-sm" style={{ color: "#6B7280" }}>
                  Serving Since 2023 · 250+ Happy Clients
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 gap-2">
                  <motion.div
                    className="rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  >
                    <motion.img
                      src={vikramImg}
                      alt="Vikram - Founder"
                      className="w-full h-full object-cover"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                  <motion.div
                    className="rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  >
                    <motion.img
                      src={rajeshImg}
                      alt="Rajasekaran - Co-Founder"
                      className="w-full h-full object-cover"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-5 py-3 border"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-xs font-semibold tracking-wide mb-1" style={{ color: "#000" }}>
                  Serving Since 2023
                </div>
                <div className="text-xs" style={{ color: "#6B7280" }}>
                  250+ Happy Clients
                </div>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill="#000" color="#000" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {}
      <section id="about" className="py-24 md:py-32" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="About" title="Meet the People Behind WayNex360" />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="relative"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <div className="grid grid-cols-2 h-full gap-2">
                  <motion.div
                    className="rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  >
                    <motion.img
                      src={vikramImg}
                      alt="Vikram"
                      className="w-full h-full object-cover"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                  <motion.div
                    className="rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  >
                    <motion.img
                      src={rajeshImg}
                      alt="Rajasekaran"
                      className="w-full h-full object-cover"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="flex gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold" style={{ ...serif, color: "#000" }}>
                    Vikram
                  </div>
                  <div className="text-sm" style={{ color: "#6B7280" }}>Founder</div>
                </div>
                <div className="w-px" style={{ background: "rgba(0,0,0,0.1)" }} />
                <div>
                  <div className="text-2xl font-bold" style={{ ...serif, color: "#000" }}>
                    Rajasekaran
                  </div>
                  <div className="text-sm" style={{ color: "#6B7280" }}>Co-Founder</div>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-8" style={{ color: "#6B7280" }}>
                "We started WayNex360 with one goal — to provide dependable services for every important
                moment in life. Whether it's a wedding, a house move, deep cleaning, or a funeral, we
                treat every client like family."
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+918098468061"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: "#000", color: "#fff" }}
                >
                  <Phone size={15} /> Call Vikram
                </a>
                <a
                  href="tel:+917708677454"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all border"
                  style={{ color: "#000", borderColor: "rgba(0,0,0,0.2)" }}
                >
                  <Phone size={15} /> Call Rajasekaran
                </a>
              </div>
            </motion.div>
          </div>

          {}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="services" className="py-24 md:py-32" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Our Services" title="3 Core Services" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.id} s={s} index={i} onNavigate={navigateWithTransition} />
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-24 md:py-32" style={{ background: "#F5F5F5" }}>
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader label="Our Journey" title="Timeline" />

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px" style={{ background: "rgba(0,0,0,0.1)" }} />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"} hidden md:block`}>
                    {item.year && (
                      <div className="text-2xl font-bold" style={{ ...serif, color: "#000" }}>
                        {item.year}
                      </div>
                    )}
                  </div>

                  <div className="relative flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 rounded-full border-2" style={{ background: "#fff", borderColor: "#000" }} />
                  </div>

                  <div className="flex-1">
                    <div className="md:hidden text-xs font-semibold tracking-wide mb-1" style={{ color: "#6B7280" }}>
                      {item.year || `Step ${i + 1}`}
                    </div>
                    <div className="font-semibold" style={{ color: "#000" }}>
                      {item.event}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="gallery" className="py-24 md:py-32" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Gallery" title="Our Work in Photos" />

          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                className="relative group rounded-xl overflow-hidden break-inside-avoid"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06 }}
              >
                <img src={item.src} alt={item.label} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-24 md:py-32" style={{ background: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Team" title="Our Team" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="group rounded-2xl overflow-hidden border"
                style={{ background: "#fff", borderColor: "rgba(0,0,0,0.06)" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15 }}
              >
                <motion.div
                  className="aspect-[4/3] overflow-hidden"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                >
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ ...serif, color: "#000" }}>
                    {member.name}
                  </h3>
                  <div className="text-sm font-medium mb-3" style={{ color: "#6B7280" }}>
                    {member.role}
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B7280" }}>
                    {member.desc}
                  </p>
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                    style={{ background: "#000", color: "#fff" }}
                  >
                    <Phone size={14} /> {member.label}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-24 md:py-32" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader label="Testimonials" title="What Our Clients Say" />

          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[testimonialIndex].stars }).map((_, i) => (
                    <Star key={i} size={22} fill="#000" color="#000" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ ...serif, color: "#000" }}>
                  "{testimonials[testimonialIndex].text}"
                </p>
                <div className="font-semibold" style={{ color: "#000" }}>
                  {testimonials[testimonialIndex].name}
                </div>
                <div className="text-sm" style={{ color: "#6B7280" }}>
                  {testimonials[testimonialIndex].role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === testimonialIndex ? "#000" : "rgba(0,0,0,0.15)",
                  width: i === testimonialIndex ? 24 : 8,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#111" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              <Phone size={14} /> 24/7 Emergency Support
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ ...serif, color: "#fff" }}>
              Need Immediate Help?
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              We're available 24 hours a day, 7 days a week — including public holidays.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href="tel:+918098468061"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90"
                style={{ background: "#fff", color: "#111" }}
              >
                <Phone size={20} /> 80984 68061
              </a>
              <a
                href="tel:+917708677454"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all border hover:opacity-90"
                style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
              >
                <Phone size={20} /> 77086 77454
              </a>
            </div>

            <a
              href="tel:+918098468061"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              Call Now <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
          </>} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/movers" element={<MoversPage />} />
          <Route path="/funeral" element={<FuneralPage />} />
        </Routes>
      </AnimatePresence>
      <footer style={{ background: "#000", color: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={image} alt="WayNex360" className="w-9 h-9 rounded-xl object-cover" />
                <div>
                  <div className="font-bold" style={{ ...serif, color: "#fff" }}>
                    WayNex360 Pro
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Your Trusted Service Partner
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "300px" }}>
                Serving families and businesses across Kanyakumari and Nagercoil with pride,
                professionalism, and 24/7 dedication.
              </p>
              <div className="flex gap-3 relative">
                <button
                  onClick={() => setIgOpen(!igOpen)}
                  onBlur={() => setTimeout(() => setIgOpen(false), 200)}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-70"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <Instagram size={16} />
                </button>
                {igOpen && (
                  <div
                    className="absolute bottom-full left-0 mb-2 rounded-xl overflow-hidden shadow-xl border"
                    style={{ background: "#fff", borderColor: "rgba(0,0,0,0.06)" }}
                  >
                    <a
                      href="https://instagram.com/waynex_360"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100"
                      style={{ color: "#000" }}
                    >
                      WayNex 360
                    </a>
                    <a
                      href="https://instagram.com/waynex_360_pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100 border-t"
                      style={{ color: "#000", borderColor: "rgba(0,0,0,0.06)" }}
                    >
                      WayNex 360 Pro
                    </a>
                  </div>
                )}
                <a
                  href="https://wa.me/918098468061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-70"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href="https://facebook.com/waynex360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-70"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "rgba(255,255,255,0.4)" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Kanyakumari & Nagercoil, Tamil Nadu
                  </span>
                </li>
                <li>
                  <a href="tel:+918098468061" className="flex items-center gap-3 text-sm transition-all hover:opacity-70" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <Phone size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
                    80984 68061
                  </a>
                </li>
                <li>
                  <a href="tel:+917708677454" className="flex items-center gap-3 text-sm transition-all hover:opacity-70" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <Phone size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
                    77086 77454
                  </a>
                </li>
                <li>
                  <a href="mailto:waynex360@gmail.com" className="flex items-center gap-3 text-sm transition-all hover:opacity-70" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <Mail size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
                    waynex360@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Gallery", "Contact"].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      onClick={(e) => { e.preventDefault(); scrollTo(l.toLowerCase()); }}
                      className="text-sm transition-all hover:opacity-70"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              © {new Date().getFullYear()} WayNex360 Pro. All rights reserved. Kanyakumari, Tamil Nadu.
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Vikram (Suriya) & Rajasekaran
            </p>
          </div>
        </div>
      </footer>
      <SpeedInsights />
    </div>
  );
}
