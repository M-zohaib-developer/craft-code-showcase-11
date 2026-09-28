import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import { usePageMeta } from "@/hooks/use-page-meta";

const ProjectsPage = () => {
  usePageMeta(
    "Projects | Muhammad Zohaib",
    "Projects by Muhammad Zohaib: MoboCheck, Cartlow, Postsiva, Automatev, Enrichers, Qyra, FreelanceHub, and Events Management System from 2 years of full-stack development.",
    "/projects",
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="pt-16">
        <Projects standalone />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
