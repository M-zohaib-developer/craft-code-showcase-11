import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/projects";
import Reveal from "@/components/Reveal";

const links = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, external: false },
  { icon: Github, label: "GitHub", value: "M-zohaib-developer", href: personalInfo.github, external: true },
  { icon: Linkedin, label: "LinkedIn", value: "Muhammad Zohaib", href: personalInfo.linkedin, external: true },
];

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="section-padding border-t border-border">
    <div className="section-container">
      <Reveal>
        <div className="surface grid gap-10 p-6 md:grid-cols-[1.2fr_1fr] md:p-10">
          <div>
            <p className="eyebrow mb-3">Contact</p>
            <h2 id="contact-title" className="section-title">Let's work together</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Open to full-time roles and freelance projects in full-stack web and mobile development. Email is the
              fastest way to reach me.
            </p>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary mt-8">
              <Mail size={16} aria-hidden="true" /> Email Muhammad Zohaib
            </a>
          </div>

          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="group flex min-h-14 items-center gap-4 rounded-lg border border-border bg-secondary px-4 py-3 transition-colors hover:border-primary/50"
                >
                  <l.icon size={18} className="shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-foreground">{l.label}</span>
                    <span className="block truncate text-sm text-muted-foreground">{l.value}</span>
                  </span>
                  <ArrowUpRight size={16} className="shrink-0 text-muted-foreground group-hover:text-foreground" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li className="flex min-h-14 items-center gap-4 px-4">
              <MapPin size={18} className="shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{personalInfo.location}</span>
            </li>
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
