import { useState, useEffect, useRef } from "react";

export function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (Math.abs(currentScrollY - lastScrollY.current) < threshold) {
            ticking = false;
            return;
          }
          setDirection(currentScrollY > lastScrollY.current ? "down" : "up");
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return direction;
}
