import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/projects";

const Footer = () => {
  const socials = [
    { icon: Github, href: personalInfo.github, label: "Muhammad Zohaib on GitHub", external: true },
    { icon: Linkedin, href: personalInfo.linkedin, label: "Muhammad Zohaib on LinkedIn", external: true },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email Muhammad Zohaib", external: false },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Zohaib · Full-Stack Software Engineer
        </p>
        <ul className="flex gap-1">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <s.icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
