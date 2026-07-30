import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const OceanDive = () => {
  const [depthProgress, setDepthProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;

      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0;
      setDepthProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ocean color atmosphere - subtle background glow based on depth
  const getDepthAtmosphere = () => {
    if (depthProgress < 0.25) {
      // Surface - bright blue glow
      return "radial-gradient(ellipse at center top, rgba(13, 148, 200, 0.08) 0%, transparent 70%)";
    } else if (depthProgress < 0.5) {
      // Twilight - darker blue
      return "radial-gradient(ellipse at center top, rgba(25, 95, 160, 0.06) 0%, transparent 70%)";
    } else if (depthProgress < 0.75) {
      // Midnight - deep blue
      return "radial-gradient(ellipse at center top, rgba(15, 50, 100, 0.05) 0%, transparent 70%)";
    } else {
      // Abyssal - very dark
      return "radial-gradient(ellipse at center top, rgba(5, 15, 40, 0.04) 0%, transparent 70%)";
    }
  };

  // Pressure vignette - subtle darkening at edges
  const vignetteOpacity = depthProgress * 0.15;

  return (
    <>
      {/* Subtle depth atmosphere overlay - NO BLUR */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          background: getDepthAtmosphere(),
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Subtle pressure vignette */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          background: `radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,${vignetteOpacity}) 100%)`,
        }}
        transition={{ duration: 0.8 }}
      />
    </>
  );
};

export default OceanDive;
