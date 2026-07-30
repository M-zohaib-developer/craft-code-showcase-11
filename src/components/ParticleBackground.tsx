import { motion } from "framer-motion";
import { useMemo } from "react";

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

interface Mote {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

/** Underwater ambience: rising bubbles, drifting marine snow, swaying currents. */
const ParticleBackground = () => {
  const bubbles = useMemo<Bubble[]>(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 10 + 3,
        duration: Math.random() * 14 + 12,
        delay: Math.random() * 12,
        drift: (Math.random() - 0.5) * 14,
        opacity: Math.random() * 0.35 + 0.12,
      })),
    []
  );

  const motes = useMemo<Mote[]>(
    () =>
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.8,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.4 + 0.08,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Slow current glows */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[560px] h-[560px] bg-primary/10 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/5 w-[460px] h-[460px] bg-accent/10 rounded-full blur-[130px]"
      />

      {/* Marine snow drifting downward */}
      {motes.map((m) => (
        <motion.div
          key={`m-${m.id}`}
          initial={{ x: `${m.x}vw`, y: `${m.y}vh`, opacity: 0 }}
          animate={{
            y: [`${m.y}vh`, `${m.y + 40}vh`],
            x: [`${m.x}vw`, `${m.x + 4}vw`, `${m.x - 3}vw`],
            opacity: [0, m.opacity, 0],
          }}
          transition={{
            duration: m.duration,
            repeat: Infinity,
            delay: m.delay,
            ease: "linear",
          }}
          className="absolute rounded-full bg-foreground"
          style={{ width: m.size, height: m.size }}
        />
      ))}

      {/* Rising bubbles */}
      {bubbles.map((b) => (
        <motion.div
          key={`b-${b.id}`}
          initial={{ x: `${b.x}vw`, y: "105vh", opacity: 0 }}
          animate={{
            y: ["105vh", "-10vh"],
            x: [`${b.x}vw`, `${b.x + b.drift}vw`, `${b.x}vw`],
            opacity: [0, b.opacity, b.opacity, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full border border-primary/40"
          style={{
            width: b.size,
            height: b.size,
            background:
              "radial-gradient(circle at 30% 30%, hsl(185 90% 85% / 0.55), hsl(190 80% 60% / 0.06) 60%, transparent 70%)",
          }}
        />
      ))}

      {/* Water caustic grid ripple */}
      <motion.div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 120px 40px at 50% 50%, hsl(var(--primary)) 0%, transparent 70%)
          `,
          backgroundSize: "220px 160px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "120px 60px", "0px 0px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
