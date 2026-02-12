import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/projects";
import { useInView } from "@/hooks/use-in-view";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/M-zohaib-developer",
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-zohaib-1a6972234/",
    href: personalInfo.linkedin,
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // Lower threshold + rootMargin so section triggers at bottom of page
  const inView = useInView(sectionRef, { amount: 0.05, rootMargin: "0px 0px 80px 0px" });
  const showCards = inView;

  return (
    <section ref={sectionRef} id="contact" className="section-padding relative overflow-hidden">
      {/* Background - scroll once */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{
            x: showCards ? 0 : 80,
            opacity: showCards ? 1 : 0,
          }}
          transition={{
            delay: showCards ? 0 : 0,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle mx-auto">
            You can reach me through the following platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{
            x: showCards ? 0 : 100,
            opacity: showCards ? 1 : 0,
          }}
          transition={{
            delay: showCards ? 0.15 : 0,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <div className="grid gap-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: showCards ? 1 : 0,
                    x: showCards ? 0 : 30,
                  }}
                  transition={{ duration: 0.4, delay: showCards ? index * 0.1 + 0.2 : 0 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center justify-between p-5 rounded-xl hover:bg-secondary/50 transition-all duration-300 group border border-transparent hover:border-border"
                >
                  <div className="flex items-center gap-5">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                    >
                      <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.a>
              ))}

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: showCards ? 1 : 0,
                  x: showCards ? 0 : 30,
                }}
                transition={{ duration: 0.4, delay: showCards ? 0.5 : 0 }}
                className="flex items-center gap-5 p-5"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
