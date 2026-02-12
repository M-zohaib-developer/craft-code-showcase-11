import { useState, useEffect, RefObject } from "react";

export function useInView(ref: RefObject<HTMLElement | null>, options?: { amount?: number; rootMargin?: string }) {
  const [inView, setInView] = useState(false);
  const amount = options?.amount ?? 0.2;
  const rootMargin = options?.rootMargin ?? "0px";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: amount, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, amount, rootMargin]);

  return inView;
}
