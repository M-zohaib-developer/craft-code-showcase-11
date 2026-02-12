import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Check } from "lucide-react";
import { personalInfo } from "@/data/projects";

const Hero = () => {
  const features = [
    "Clean Code",
    "Modern Design",
    "Fast Performance",
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.15 }}
            className="relative z-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary font-mono text-sm mb-6 tracking-[0.3em] uppercase"
            >
              Full Stack Developer
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]"
            >
              Building{" "}
              <span className="italic font-light text-primary">exceptional</span>
              <br />
              digital experiences
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Feature checks */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:gap-4 hover:shadow-lg hover:shadow-primary/25"
              >
                View Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-semibold transition-all duration-300 hover:bg-secondary hover:border-muted-foreground"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image with Decorations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative bracket left */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-8 top-1/4 text-primary/60"
              >
                <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
                  <path d="M50 10 L20 10 L20 110 L50 110" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </motion.div>

              {/* Decorative bracket right */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -right-8 top-1/4 text-primary/60"
              >
                <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
                  <path d="M10 10 L40 10 L40 110 L10 110" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </motion.div>

              {/* Floating circle decoration */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/3 w-32 h-32 border-2 border-primary/30 rounded-full"
              />

              {/* Large number background */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.15, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -top-10 -right-10 text-[180px] font-bold text-primary leading-none select-none pointer-events-none"
              >
                10
              </motion.div>

              {/* Profile image with border */}
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-muted ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Profile picture with animation */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <motion.div
                    className="w-full h-full rounded-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      opacity: { duration: 0.5, ease: "easeOut" },
                      scale: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                    }}
                  >
                    <motion.img
                      src="/image%20copy.png"
                      alt="Profile"
                      className="w-full h-full object-cover object-center"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatDelay: 0.8,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Years of experience text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                
              </motion.div>
            </div>
          

            {/* Additional floating elements */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-16 h-16 border border-primary/20 rounded-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
