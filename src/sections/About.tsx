import { motion } from "framer-motion";
import { MapPin, Calendar, Code2 } from "lucide-react";
import { personalInfo } from "@/data/projects";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="section-title">About</h2>
          <p className="section-subtitle mb-12">
            Professional background and development approach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 card-hover border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Experience</h3>
            <p className="text-muted-foreground text-sm">
              6+ years of professional software development across various industries and project scales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 card-hover border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Focus</h3>
            <p className="text-muted-foreground text-sm">
              React ecosystem, TypeScript, and Node.js. Building scalable web applications with clean architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl p-6 card-hover border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              {personalInfo.location}. Available for remote collaboration and on-site opportunities.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card rounded-xl p-8 border border-border"
        >
          <h3 className="font-semibold text-foreground mb-4">Development Approach</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I focus on writing clean, maintainable code that solves real problems. My approach emphasizes understanding business requirements before diving into implementation, ensuring the technical solution aligns with project goals.
            </p>
            <p>
              Throughout my career, I've worked on projects ranging from startup MVPs to enterprise applications. This experience has taught me to balance speed of delivery with code quality, and to communicate effectively with both technical and non-technical stakeholders.
            </p>
            <p>
              I stay current with industry developments through continuous learning and active participation in the developer community. I believe in sharing knowledge and contributing to open source when possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
