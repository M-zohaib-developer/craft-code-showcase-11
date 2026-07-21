import { useRef } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/projects";
import { useInView } from "@/hooks/use-in-view";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.2 });
  const showCards = inView;

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-primary rounded-full blur-[180px]"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            What I Use
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title"
          >
            Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Technologies and tools used in daily development
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ x: -80, opacity: 0 }}
              animate={{
                x: showCards ? 0 : 100,
                opacity: showCards ? 1 : 0,
              }}
              transition={{
                delay: showCards ? categoryIndex * 0.12 : 0,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: "0 30px 60px -15px hsl(38 100% 55% / 0.15)",
                transition: { duration: 0.4 }
              }}
              className="bg-card rounded-2xl p-8 border border-border relative group overflow-hidden"
            >
              {/* Hover gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"
              />
              
              {/* Animated accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: showCards ? "80px" : 0 }}
                transition={{ duration: 0.5, delay: showCards ? categoryIndex * 0.12 + 0.15 : 0 }}
                className="h-1.5 bg-gradient-to-r from-primary to-yellow-400 rounded-full mb-8"
              />
              
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: showCards ? 1 : 0, x: showCards ? 0 : -30 }}
                transition={{ delay: showCards ? categoryIndex * 0.12 + 0.2 : 0, duration: 0.4 }}
                className="font-bold text-xl text-foreground mb-8 group-hover:text-primary transition-colors relative"
              >
                {category.title}
              </motion.h3>
              
              <div className="flex flex-wrap gap-2.5 relative">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: showCards ? 1 : 0,
                      scale: showCards ? 1 : 0.9,
                    }}
                    transition={{
                      delay: showCards ? categoryIndex * 0.12 + skillIndex * 0.04 : 0,
                      duration: 0.35,
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      y: -5,
                      boxShadow: "0 10px 20px -5px hsl(38 100% 55% / 0.2)",
                    }}
                    className="bg-secondary/60 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground cursor-pointer border border-transparent hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 whitespace-nowrap"
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
