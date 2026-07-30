import { motion } from "framer-motion";
import { skillCategories } from "@/data/projects";

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-primary rounded-full blur-[180px]"
      />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
            What I Use
          </span>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools used in daily development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-card rounded-2xl p-8 border border-border relative group overflow-hidden"
            >
              <div className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />

              <h3 className="font-bold text-xl text-foreground mb-8 group-hover:text-primary transition-colors relative">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5 relative">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-secondary/60 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground cursor-pointer border border-transparent hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
