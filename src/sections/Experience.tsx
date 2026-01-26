import { motion } from "framer-motion";
import { experiences } from "@/data/projects";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-[300px] h-[300px] border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] border border-primary/5 rounded-full"
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
            Career Path
          </motion.span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional background and career progression
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-8 top-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                className="absolute left-0 md:left-6 top-8 w-5 h-5 bg-background border-2 border-primary rounded-full hidden md:flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-7 md:p-8 border border-border group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <motion.h3 
                      className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors"
                    >
                      {experience.role}
                    </motion.h3>
                    <p className="text-primary font-medium text-lg">{experience.company}</p>
                  </div>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="text-sm text-muted-foreground font-mono bg-secondary px-4 py-2 rounded-full w-fit border border-border"
                  >
                    {experience.period}
                  </motion.span>
                </div>

                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {experience.description}
                </p>

                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.5 }}
                        className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" 
                      />
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
