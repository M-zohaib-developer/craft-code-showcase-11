import { Code2, Layers, MapPin } from "lucide-react";
import { personalInfo } from "@/data/projects";
import Reveal from "@/components/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Focus",
    description: "React ecosystem (React, Next.js, React Native), TypeScript, and Node.js — building web and mobile applications with clean architecture.",
  },
  {
    icon: Layers,
    title: "Backend & access control",
    description: "REST APIs with Node.js and Express, MySQL schemas with Prisma, and Casbin-based role and permission systems.",
  },
  {
    icon: MapPin,
    title: "Location",
    description: `${personalInfo.location}. Available for remote collaboration and on-site roles.`,
  },
];

const approach = [
  {
    title: "Understand the requirement first",
    text: "I clarify the business requirements before implementation, so the technical solution matches what the product actually needs.",
  },
  {
    title: "Maintainable over clever",
    text: "Clean, readable code, clear separation of controllers, services, and UI, and predictable state management.",
  },
  {
    title: "Balance speed and quality",
    text: "Having worked on MVPs and enterprise back-offices, I balance delivery speed with code quality and communicate clearly with technical and non-technical stakeholders.",
  },
];

const About = () => (
  <>
    <section id="about" aria-labelledby="about-title" className="section-padding border-t border-border">
      <div className="section-container grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="eyebrow mb-3">About</p>
          <h2 id="about-title" className="section-title">Engineering web and mobile products end to end</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{personalInfo.bio}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {highlights.map((h) => (
              <li key={h.title} className="surface p-5">
                <h.icon size={18} className="text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-semibold text-foreground">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    <section id="approach" aria-labelledby="approach-title" className="section-padding border-t border-border">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Engineering approach</p>
          <h2 id="approach-title" className="section-title">How I work</h2>
        </Reveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {approach.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <li className="surface h-full list-none p-6">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  </>
);

export default About;
