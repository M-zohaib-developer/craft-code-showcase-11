import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ZONES = [
  { name: "Sunlight Zone", max: 200 },
  { name: "Twilight Zone", max: 1000 },
  { name: "Midnight Zone", max: 4000 },
  { name: "Abyssal Zone", max: 6000 },
];

const MAX_DEPTH = 6000;

/** Progressive ocean depth atmosphere driven by scroll position. */
const OceanDive = () => {
  const [depth, setDepth] = useState(0); // 0..1

  useEffect(() => {
    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setDepth(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const meters = Math.round(depth * MAX_DEPTH);
  const zone = ZONES.find((z) => meters <= z.max) ?? ZONES[ZONES.length - 1];

  return (
    <>
      {/* Water column: gets darker and colder with depth */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-[background] duration-700"
        style={{
          background: `linear-gradient(180deg,
            hsl(198 80% ${Math.max(4, 22 - depth * 20)}%) 0%,
            hsl(203 85% ${Math.max(3, 14 - depth * 12)}%) 45%,
            hsl(210 90% ${Math.max(2, 8 - depth * 7)}%) 100%)`,
        }}
      />

      {/* Surface light shafts — fade out as we sink */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ opacity: Math.max(0, 1 - depth * 1.6) }}
      >
        {[12, 28, 46, 63, 81].map((left, i) => (
          <motion.div
            key={left}
            className="absolute -top-1/4 h-[150vh] origin-top"
            style={{
              left: `${left}%`,
              width: `${60 + i * 25}px`,
              background:
                "linear-gradient(180deg, hsl(190 90% 70% / 0.20) 0%, hsl(190 90% 70% / 0.05) 45%, transparent 85%)",
              filter: "blur(18px)",
              transform: "rotate(8deg)",
            }}
            animate={{ opacity: [0.35, 0.8, 0.35], x: [0, 18, 0] }}
            transition={{
              duration: 9 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Caustics shimmer near the surface */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
        style={{
          opacity: Math.max(0, 0.16 - depth * 0.2),
          backgroundImage:
            "radial-gradient(circle at 20% 10%, hsl(185 90% 65% / 0.5) 0 2px, transparent 60px), radial-gradient(circle at 70% 30%, hsl(185 90% 65% / 0.4) 0 2px, transparent 80px)",
          backgroundSize: "420px 420px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "220px 140px", "0px 0px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      {/* Pressure vignette deepens with depth */}
      <div
        className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse at center, transparent 25%, hsl(215 95% 3% / ${
            0.25 + depth * 0.55
          }) 100%)`,
        }}
      />

      {/* Depth HUD */}
      <div className="fixed right-4 bottom-6 z-40 hidden sm:flex items-center gap-3 pointer-events-none">
        <div className="text-right">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80">
            {zone.name}
          </div>
          <div className="font-mono text-sm text-foreground/80 tabular-nums">
            {meters.toLocaleString()} m
          </div>
        </div>
        <div className="relative h-40 w-[3px] rounded-full bg-foreground/10 overflow-hidden">
          <div
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary to-primary/20 transition-[height] duration-200"
            style={{ height: `${depth * 100}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default OceanDive;
