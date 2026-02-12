import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { useInView } from "@/hooks/use-in-view";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.2 });
  const showCards = inView;

  return (
    <section ref={sectionRef} id="projects" className="section-padding relative overflow-hidden">
      {/* Animated background - scroll once */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            My Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title"
          >
            Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-subtitle"
          >
            Selected work demonstrating technical capabilities and problem-solving approach
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ x: -80, opacity: 0 }}
              animate={{
                x: showCards ? 0 : 100,
                opacity: showCards ? 1 : 0,
              }}
              transition={{
                delay: showCards ? index * 0.12 : 0,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              className="group bg-card rounded-2xl border border-border overflow-hidden relative"
            >
              {/* Animated border glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-primary/10 pointer-events-none z-10"
              />
              
              {/* Project Image */}
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none"
                  initial={{ scale: 1.2, opacity: 0.5 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />
                
                {/* Hover overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm"
                >
                  <motion.div 
                    className="flex gap-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-card rounded-full shadow-lg border border-border"
                        aria-label="View GitHub repository"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={24} className="text-foreground" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-primary rounded-full shadow-lg shadow-primary/30"
                        aria-label="View live project"
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={24} className="text-primary-foreground" />
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-7 relative">
                <div className="flex items-start justify-between mb-4">
                  <motion.h3 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    whileHover={{ x: 5, y: -5, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight
                      size={22}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </motion.div>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-muted-foreground text-sm mb-5 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + techIndex * 0.05 + 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        boxShadow: "0 5px 15px -5px hsl(38 100% 55% / 0.3)"
                      }}
                      className="px-3 py-1.5 bg-secondary/60 rounded-full text-xs font-medium text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-foreground hover:bg-primary/10 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
