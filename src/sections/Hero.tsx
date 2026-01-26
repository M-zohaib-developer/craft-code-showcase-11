import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/projects";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              Full Stack Developer
            </motion.p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {personalInfo.name}
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:opacity-90 hover:gap-3"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-colors hover:bg-secondary/80"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hero-image">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="w-full h-full p-6">
                  {/* Dashboard Preview Mock */}
                  <div className="bg-card rounded-xl h-full shadow-lg border border-border overflow-hidden">
                    <div className="h-8 bg-muted/50 border-b border-border flex items-center px-3 gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex gap-4">
                        <div className="w-1/3 h-20 bg-primary/10 rounded-lg" />
                        <div className="w-1/3 h-20 bg-accent/10 rounded-lg" />
                        <div className="w-1/3 h-20 bg-muted rounded-lg" />
                      </div>
                      <div className="h-32 bg-muted/50 rounded-lg" />
                      <div className="flex gap-4">
                        <div className="w-2/3 h-24 bg-muted/50 rounded-lg" />
                        <div className="w-1/3 h-24 bg-primary/5 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -right-8 w-72 h-72 rounded-full blur-3xl bg-primary/5" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 rounded-full blur-3xl bg-accent/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
