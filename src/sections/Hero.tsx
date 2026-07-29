import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, Code2, Zap } from "lucide-react";
import { personalInfo, projects, experiences } from "@/data/projects";
import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { label: "Projects", value: `${projects.length}+` },
    { label: "Stack Depth", value: "Full" },
    { label: "Focus", value: "Node · Next.js · React.js" },
  ];

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Status Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Available For Work • {personalInfo.location}
            </span>
          </div>
          <div className="text-xs font-mono text-muted-foreground tracking-widest">
            {new Date().getFullYear()} / PORTFOLIO V2
          </div>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main Intro Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 bento-card rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-2 mb-8 bg-primary/5">
                <Sparkles size={14} className="text-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary">Full Stack Developer</span>
              </div>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground mb-8">
                {personalInfo.name.split(" ")[0]}
                <br />
                <span className="text-gradient italic font-light">
                  {personalInfo.name.split(" ").slice(1).join(" ")}.
                </span>
              </h1>
              <p className="text-muted-foreground max-w-md leading-relaxed text-sm md:text-base">
                Crafting resilient web & mobile products with the React ecosystem, TypeScript, and Node — from schema to pixel.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-12">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all"
              >
                Explore Work
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <button className="px-8 py-3 rounded-full border border-border hover:bg-primary/5 font-semibold transition-all">
                Download CV
              </button>
            </div>
          </motion.div>

          {/* Profile Image Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 bento-card rounded-2xl overflow-hidden relative group min-h-[400px]"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/image-copy.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 noise-grain opacity-[0.08] mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-primary block mb-1">Signed</span>
                    <span className="font-display font-semibold text-lg text-foreground">{personalInfo.name}</span>
                  </div>
                  <div className="bg-primary/20 backdrop-blur-md p-3 rounded-full border border-primary/30">
                    <Zap size={16} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Row */}
          {stats.slice(0, 2).map((s, i) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="md:col-span-3 bento-card rounded-2xl p-8"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-8">
                {s.label}
              </span>
              <span className="font-display text-5xl md:text-6xl font-bold text-foreground">
                {s.value}
              </span>
            </motion.div>
          ))}

          {/* Focus Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-6 bento-card rounded-2xl p-8 flex flex-col justify-end"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-8">
              Focus
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span className="font-display text-4xl text-foreground">Node</span>
              <span className="font-display text-4xl text-primary/40">•</span>
              <span className="font-display text-4xl text-foreground">Next.js</span>
              <span className="font-display text-4xl text-primary/40">•</span>
              <span className="font-display text-4xl text-foreground">React.js</span>
            </div>
          </motion.div>

          {/* About Summary Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-6 bento-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={18} className="text-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">About</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Connect Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 bento-card rounded-2xl p-8"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-8">
              Connect
            </span>
            <div className="grid grid-cols-3 gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="aspect-square flex items-center justify-center border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square flex items-center justify-center border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square flex items-center justify-center border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Current Role Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 bento-card rounded-2xl p-8 border-l-4 border-l-primary flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Now</span>
              <span className="text-xs font-mono text-muted-foreground">{experiences[0].period}</span>
            </div>
            <div className="mt-8">
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                {experiences[0].role}
              </h3>
              <p className="text-sm text-muted-foreground">{experiences[0].company}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
