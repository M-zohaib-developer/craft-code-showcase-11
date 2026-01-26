import { motion } from "framer-motion";
import { MapPin, Calendar, Code2 } from "lucide-react";
import { personalInfo } from "@/data/projects";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Who I Am
          </motion.span>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle mb-12">
            Professional background and development approach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Calendar,
              title: "Experience",
              description: "6+ years of professional software development across various industries and project scales.",
              color: "primary",
            },
            {
              icon: Code2,
              title: "Focus",
              description: "React ecosystem, TypeScript, and Node.js. Building scalable web applications with clean architecture.",
              color: "accent",
            },
            {
              icon: MapPin,
              title: "Location",
              description: `${personalInfo.location}. Available for remote collaboration and on-site opportunities.`,
              color: "muted",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
              className="bg-card rounded-xl p-6 card-hover border border-border group cursor-pointer"
            >
              <motion.div 
                className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-4`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className={`w-6 h-6 text-${item.color === "muted" ? "muted-foreground" : item.color}`} />
              </motion.div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border relative overflow-hidden"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"
          />
          
          <h3 className="font-semibold text-xl text-foreground mb-6">Development Approach</h3>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I focus on writing clean, maintainable code that solves real problems. My approach emphasizes understanding business requirements before diving into implementation, ensuring the technical solution aligns with project goals.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Throughout my career, I've worked on projects ranging from startup MVPs to enterprise applications. This experience has taught me to balance speed of delivery with code quality, and to communicate effectively with both technical and non-technical stakeholders.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I stay current with industry developments through continuous learning and active participation in the developer community. I believe in sharing knowledge and contributing to open source when possible.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
