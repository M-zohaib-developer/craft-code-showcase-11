import { motion } from "framer-motion";
import { experiences } from "@/data/projects";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-[180px]"
      />

      <div className="section-container relative z-10">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
            Career Path
          </span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional background and career progression</p>
        </div>

        <div className="space-y-10 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="relative md:pl-24"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-6 top-10 w-6 h-6 bg-background border-3 border-primary rounded-full hidden md:flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 bg-primary rounded-full" />
              </div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px -5px hsl(38 100% 55% / 0.1)",
                  transition: { duration: 0.3 }
                }}
                className="bg-card rounded-2xl p-8 md:p-10 border border-border group hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6 relative">
                  <div>
                    <h3 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                      {experience.role}
                    </h3>
                    <p className="text-primary font-semibold text-lg mt-1">
                      {experience.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono bg-secondary/80 px-5 py-2.5 rounded-full w-fit border border-border">
                    {experience.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-base relative">
                  {experience.description}
                </p>

                <ul className="space-y-4 relative">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-4 text-sm text-muted-foreground group/item"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover/item:shadow-[0_0_10px_hsl(38_100%_55%)] transition-shadow" />
                      <span className="group-hover/item:text-foreground transition-colors">
                        {responsibility}
                      </span>
                    </li>
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
