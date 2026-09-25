import { useEffect } from "react";

const SITE = "https://www.zohaib.engineer";

/** Sets per-route title, description, canonical and og tags (for JS-rendering crawlers like Googlebot). */
export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    document.title = title;
    const set = (sel: string, attr: string, value: string) => {
      const el = document.head.querySelector(sel);
      if (el) el.setAttribute(attr, value);
    };
    set('meta[name="description"]', "content", description);
    set('link[rel="canonical"]', "href", url);
    set('meta[property="og:url"]', "content", url);
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", description);
    set('meta[name="twitter:title"]', "content", title);
    set('meta[name="twitter:description"]', "content", description);
  }, [title, description, path]);
}
