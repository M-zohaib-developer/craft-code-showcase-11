import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            My Work
          </motion.span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Selected work demonstrating technical capabilities and problem-solving approach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Project Image */}
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-background/60 backdrop-blur-sm">
                  <motion.div 
                    className="flex gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-card rounded-full shadow-lg border border-border"
                        aria-label="View GitHub repository"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={22} className="text-foreground" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-primary rounded-full shadow-lg"
                        aria-label="View live project"
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={22} className="text-primary-foreground" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7 relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </motion.div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-secondary/50 rounded-full text-xs font-medium text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground transition-all cursor-default"
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
