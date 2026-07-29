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
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            What I Use
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title"
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Technologies and tools used in daily development
          </motion.p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
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
                whileInView={{ width: "80px" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.12 + 0.15 }}
                className="h-1.5 bg-gradient-to-r from-primary to-yellow-400 rounded-full mb-8"
              />

              <h3 className="font-bold text-xl text-foreground mb-8 group-hover:text-primary transition-colors relative">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5 relative">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      delay: categoryIndex * 0.12 + skillIndex * 0.04,
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
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
