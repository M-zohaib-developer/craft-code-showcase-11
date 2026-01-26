import { motion } from "framer-motion";
import { skillCategories } from "@/data/projects";

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            What I Use
          </motion.span>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools used in daily development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-8 border border-border relative group"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                className="h-1 bg-primary rounded-full mb-6"
              />
              
              <h3 className="font-semibold text-lg text-foreground mb-8 relative">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3 relative">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.15 + skillIndex * 0.08,
                      ease: "backOut"
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      backgroundColor: "hsl(var(--primary) / 0.15)",
                    }}
                    className="bg-secondary/50 rounded-xl px-4 py-3 text-center text-sm font-medium text-foreground transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30"
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
