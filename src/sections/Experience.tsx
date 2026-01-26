import { motion } from "framer-motion";
import { experiences } from "@/data/projects";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional background and career progression
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 md:p-8 border border-border card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {experience.role}
                  </h3>
                  <p className="text-primary font-medium">{experience.company}</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full w-fit">
                  {experience.period}
                </span>
              </div>

              <p className="text-muted-foreground mb-4">
                {experience.description}
              </p>

              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
