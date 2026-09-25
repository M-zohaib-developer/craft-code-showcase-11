import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  usePageMeta(
    "Muhammad Zohaib | Full-Stack Software Engineer",
    "Muhammad Zohaib is a full-stack software engineer in Lahore, Pakistan, building web and mobile applications with React, Next.js, TypeScript, Node.js, and MySQL.",
    "/",
  );
  const { hash } = useLocation();

  // When arriving from another route with /#section, scroll to that section.
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects limit={3} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
