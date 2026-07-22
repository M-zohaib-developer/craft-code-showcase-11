import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  // bento sizing patterns
  const spans = [
    "md:col-span-8 md:row-span-2",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-6",
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="font-display section-title">Projects<span className="text-primary">.</span></h2>
          </div>
          <p className="section-subtitle max-w-md">
            A curated bento of platforms, tools, and full-stack systems I've shipped.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[260px]">
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`bento-card group relative overflow-hidden ${spans[index] ?? "md:col-span-6"}`}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/85 to-card/40" />
                </div>

                <div className={`relative h-full flex flex-col justify-between p-6 md:p-7 ${isFeatured ? "md:p-8" : ""}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">
                      / 0{index + 1}
                    </span>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border border-border/80 backdrop-blur bg-background/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                          aria-label="GitHub"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                          aria-label="Live"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className={`font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight ${isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                      {project.title}
                    </h3>
                    <p className={`text-muted-foreground mt-2 leading-relaxed ${isFeatured ? "text-sm line-clamp-3" : "text-xs line-clamp-2"}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.techStack.slice(0, isFeatured ? 6 : 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-background/60 border border-border/60 text-[10px] font-mono text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 text-primary transition-opacity"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
