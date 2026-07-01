import { motion } from "framer-motion";
import truckSrc from "@/imports/truck.svg";

export default function Truck({
  onUpdate,
}: {
  onUpdate?: (x: number, y: number) => void;
}) {
  return (
    <motion.img
      src={truckSrc}
      className="absolute w-40 z-10"
      style={{
        right: -200,
        bottom: -150,
      }}
      animate={{
        x: [0, -120, -300, -300, -300, -520, -800],
        y: [0, -220, -420, -415, -420, -300, -80],
        rotate: [20, 10, 0, 0, 0, -10, -20],
      }}
      onUpdate={(latest) => {
        if (onUpdate && latest.x !== undefined) {
          onUpdate(Number(latest.x), Number(latest.y));
        }
      }}
      transition={{
        duration: 3.5,
        ease: "easeInOut",
        times: [0, 0.14, 0.37, 0.40, 0.43, 0.71, 1],
      }}
    />
  );
}
