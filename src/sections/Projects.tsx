import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import Reveal from "@/components/Reveal";

interface ProjectsProps {
  /** Rendered as its own page: uses an h1 and shows every project. */
  standalone?: boolean;
  /** Homepage preview: number of projects to show. */
  limit?: number;
}

const Projects = ({ standalone = false, limit }: ProjectsProps) => {
  const list = limit ? projects.slice(0, limit) : projects;
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id="projects" aria-labelledby="projects-title" className={`section-padding ${standalone ? "" : "border-t border-border"}`}>
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Projects</p>
          <Heading id="projects-title" className={standalone ? "text-3xl font-semibold tracking-tight text-foreground md:text-5xl" : "section-title"}>
            {standalone ? "Things I've built" : "Selected projects"}
          </Heading>
          <p className="section-subtitle">
            {standalone
              ? "Work projects and personal builds. For each one: what it is, what I was responsible for, and the stack."
              : "A few of the projects I've worked on. The full list, with more detail, is on the projects page."}
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {list.map((p, i) => (
            <Reveal key={p.id}>
              <ProjectRow project={p} index={i} standalone={standalone} />
            </Reveal>
          ))}
        </div>

        {!standalone && (
          <Link to="/projects" className="btn-secondary mt-10">
            See all {projects.length} projects <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
};

const ProjectRow = ({ project: p, index, standalone }: { project: Project; index: number; standalone: boolean }) => {
  const H = standalone ? "h2" : "h3";
  return (
    <article className="grid gap-6 py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10">
      <div className="overflow-hidden rounded-lg border border-border bg-secondary">
        {p.image ? (
          <img
            src={p.image}
            alt={`Screenshot of ${p.title}`}
            width={1200}
            height={606}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover object-top"
          />
        ) : (
          <div aria-hidden="true" className="bg-grid flex aspect-[16/10] items-center justify-center">
            <span className="font-mono text-sm text-muted-foreground">no screenshot yet</span>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-col">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          <H className="text-xl font-semibold text-foreground md:text-2xl">{p.title}</H>
        </div>
        <p className="mt-1 text-sm text-primary">{p.summary}</p>
        {p.role && <p className="mt-3 font-mono text-xs text-muted-foreground">Role: {p.role}</p>}
        <p className={`mt-4 text-sm leading-relaxed text-muted-foreground ${standalone ? "" : "line-clamp-4"}`}>{p.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
          {p.techStack.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-1 pt-5">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
              {new URL(p.liveUrl).hostname.replace(/^www\./, "")} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          {p.githubUrl && (
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <Github size={14} aria-hidden="true" /> GitHub profile
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;
