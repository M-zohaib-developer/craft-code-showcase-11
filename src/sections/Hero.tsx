import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, Code2, Zap } from "lucide-react";
import { personalInfo, projects, experiences } from "@/data/projects";

const Hero = () => {
  const stats = [
    { label: "Projects", value: `${projects.length}+` },
    { label: "Stack Depth", value: "Full" },
    { label: "Focus", value: "React · Node" },
  ];

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-glow/5 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* Top meta bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for work · {personalInfo.location}
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
            {new Date().getFullYear()} / Portfolio v2
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(120px,auto)]">

          {/* Name / Title — hero cell */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="col-span-12 lg:col-span-8 row-span-2 bento-card p-8 md:p-10 flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                <Sparkles size={12} /> Full Stack Developer
              </div>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-foreground">
                {personalInfo.name.split(" ")[0]}
                <br />
                <span className="italic font-light text-gradient">
                  {personalInfo.name.split(" ").slice(1).join(" ")}.
                </span>
              </h1>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-6 mt-8">
              <p className="text-muted-foreground max-w-md leading-relaxed text-sm md:text-base">
                Crafting resilient web & mobile products with the React ecosystem, TypeScript, and Node — from schema to pixel.
              </p>
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:gap-4 transition-all"
              >
                Explore Work
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </motion.div>

          {/* Portrait cell */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="col-span-12 sm:col-span-6 lg:col-span-4 row-span-3 bento-card p-0 min-h-[380px] group"
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              <img
                src="/image%20copy.png"
                alt={personalInfo.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 noise-grain opacity-[0.08] mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-primary mb-1">Signed</div>
                    <div className="font-display font-semibold text-lg text-foreground">{personalInfo.name}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary">
                    <Zap size={16} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats trio */}
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="col-span-4 lg:col-span-4 lg:col-start-auto bento-card p-5 flex flex-col justify-between min-h-[120px]"
            >
              <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </div>
              <div className="font-display font-bold text-2xl md:text-3xl text-foreground">
                {s.value}
              </div>
            </motion.div>
          ))}

          {/* About mini */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-12 md:col-span-8 lg:col-span-5 bento-card p-6 min-h-[160px]"
          >
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
              <Code2 size={14} /> About
            </div>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Contact / socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-12 md:col-span-4 lg:col-span-3 bento-card p-6 flex flex-col justify-between min-h-[160px]"
          >
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Connect
            </div>
            <div className="flex gap-3">
              <a href={`mailto:${personalInfo.email}`} className="flex-1 aspect-square rounded-xl border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-all" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square rounded-xl border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-all" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square rounded-xl border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Latest role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="col-span-12 lg:col-span-4 bento-card p-6 min-h-[160px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary">Now</div>
              <div className="text-xs font-mono text-muted-foreground">{experiences[0].period}</div>
            </div>
            <div>
              <div className="font-display font-semibold text-lg text-foreground leading-tight">
                {experiences[0].role}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {experiences[0].company}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
