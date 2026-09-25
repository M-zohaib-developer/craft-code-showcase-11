import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { personalInfo, projects, experiences } from "@/data/projects";

const Hero = () => {
  const current = experiences[0];

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

      <div className="section-container relative grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow mb-6 flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            Open to new opportunities
          </p>

          <h1 id="hero-title" className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Muhammad Zohaib
            <span className="mt-3 block text-muted-foreground">Full-Stack Software Engineer</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I build production web and mobile applications with React, Next.js, React Native, TypeScript,
            and Node.js — from role-based back-office platforms to AI-powered products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/projects" className="btn-primary">
              View my projects <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">Contact me</a>
            <a href="/Zohaib_CV_v1.pdf" download="Muhammad_Zohaib_CV.pdf" className="btn-secondary">
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Currently</dt>
              <dd className="mt-1 text-sm text-foreground">{current.role}, MoboCheck</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Projects</dt>
              <dd className="mt-1 text-sm text-foreground">{projects.length} shipped &amp; built</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Based in</dt>
              <dd className="mt-1 flex items-center gap-1 text-sm text-foreground">
                <MapPin size={14} aria-hidden="true" /> {personalInfo.location}
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="surface overflow-hidden p-2">
            <img
              src="/hero.webp"
              alt="Portrait of Muhammad Zohaib, full-stack software engineer"
              width={800}
              height={800}
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full rounded-lg object-cover"
            />
          </div>
          <div className="mt-3 flex gap-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1">
              <Github size={16} aria-hidden="true" /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1">
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
