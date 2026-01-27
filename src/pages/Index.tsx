import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
