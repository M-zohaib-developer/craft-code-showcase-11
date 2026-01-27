import { motion } from "framer-motion";
import { MapPin, Calendar, Code2 } from "lucide-react";
import { personalInfo } from "@/data/projects";

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: 15,
    scale: 0.8
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut" as const
    }
  })
};

const About = () => {
  const items = [
    {
      icon: Calendar,
      title: "Experience",
      description: "6+ years of professional software development across various industries and project scales.",
    },
    {
      icon: Code2,
      title: "Focus",
      description: "React ecosystem, TypeScript, and Node.js. Building scalable web applications with clean architecture.",
    },
    {
      icon: MapPin,
      title: "Location",
      description: `${personalInfo.location}. Available for remote collaboration and on-site opportunities.`,
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Who I Am
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title"
          >
            About
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-subtitle mb-12"
          >
            Professional background and development approach
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 perspective-1000">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px hsl(38 100% 55% / 0.15)",
                transition: { duration: 0.4 } 
              }}
              className="bg-card rounded-xl p-6 border border-border group cursor-pointer relative overflow-hidden"
            >
              {/* Animated gradient border */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 pointer-events-none"
              />
              
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 relative"
              >
                <motion.div
                  animate={{ 
                    boxShadow: ["0 0 0 0 hsl(38 100% 55% / 0)", "0 0 0 10px hsl(38 100% 55% / 0.1)", "0 0 0 0 hsl(38 100% 55% / 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute inset-0 rounded-xl"
                />
                <item.icon className="w-7 h-7 text-primary" />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors"
              >
                {item.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5 }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border relative overflow-hidden"
        >
          {/* Decorative animated line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "150px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded-full mb-8"
          />
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-semibold text-2xl text-foreground mb-8"
          >
            Development Approach
          </motion.h3>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {[
              "I focus on writing clean, maintainable code that solves real problems. My approach emphasizes understanding business requirements before diving into implementation, ensuring the technical solution aligns with project goals.",
              "Throughout my career, I've worked on projects ranging from startup MVPs to enterprise applications. This experience has taught me to balance speed of delivery with code quality, and to communicate effectively with both technical and non-technical stakeholders.",
              "I stay current with industry developments through continuous learning and active participation in the developer community. I believe in sharing knowledge and contributing to open source when possible."
            ].map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 + 0.3 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
