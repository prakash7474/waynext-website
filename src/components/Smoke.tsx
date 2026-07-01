import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function Smoke({
  active,
  truckPosRef,
}: {
  active: boolean;
  truckPosRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      idRef.current += 1;
      const pos = truckPosRef.current;
      setParticles((prev) => [...prev, { id: idRef.current, x: pos.x - 50, y: pos.y + 30 }]);
    }, 150);
    return () => clearInterval(interval);
  }, [active, truckPosRef]);

  const removeParticle = (id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <AnimatePresence>
      {particles.slice(-30).map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: 16,
            height: 16,
            background: "rgba(180,180,180,0.6)",
            zIndex: 0,
          }}
          initial={{ scale: 0.3, opacity: 0.8, y: 0 }}
          animate={{ scale: 2, opacity: 0, y: -40 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => removeParticle(p.id)}
        />
      ))}
    </AnimatePresence>
  );
}
