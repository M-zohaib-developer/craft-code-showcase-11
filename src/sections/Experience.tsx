import { motion } from "framer-motion";
import { experiences } from "@/data/projects";

const experienceVariants = {
  hidden: { 
    opacity: 0, 
    x: -100,
    rotateY: 15,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      delay: i * 0.25,
      duration: 0.9,
      ease: "easeOut" as const
    }
  })
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-[180px]"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-[300px] h-[300px] border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] border border-primary/5 rounded-full"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
            Career Path
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title"
          >
            Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-subtitle"
          >
            Professional background and career progression
          </motion.p>
        </motion.div>

        <div className="space-y-10 relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-0 md:left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={experienceVariants}
              className="relative md:pl-24"
            >
              {/* Animated timeline dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.25 + 0.4, type: "spring", stiffness: 300 }}
                className="absolute left-0 md:left-6 top-10 w-6 h-6 bg-background border-3 border-primary rounded-full hidden md:flex items-center justify-center z-10"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="w-2.5 h-2.5 bg-primary rounded-full" 
                />
              </motion.div>

              <motion.div
                whileHover={{ 
                  x: 10, 
                  scale: 1.01,
                  boxShadow: "0 25px 50px -12px hsl(38 100% 55% / 0.12)",
                  transition: { duration: 0.4 }
                }}
                className="bg-card rounded-2xl p-8 md:p-10 border border-border group hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"
                />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6 relative">
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors"
                    >
                      {experience.role}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="text-primary font-semibold text-lg mt-1"
                    >
                      {experience.company}
                    </motion.p>
                  </div>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm text-muted-foreground font-mono bg-secondary/80 px-5 py-2.5 rounded-full w-fit border border-border"
                  >
                    {experience.period}
                  </motion.span>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="text-muted-foreground mb-6 leading-relaxed text-base relative"
                >
                  {experience.description}
                </motion.p>

                <ul className="space-y-4 relative">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.15 + idx * 0.1 + 0.6,
                        duration: 0.5
                      }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 text-sm text-muted-foreground group/item"
                    >
                      <motion.span 
                        whileHover={{ scale: 2 }}
                        className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover/item:shadow-[0_0_10px_hsl(38_100%_55%)] transition-shadow" 
                      />
                      <span className="group-hover/item:text-foreground transition-colors">
                        {responsibility}
                      </span>
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
