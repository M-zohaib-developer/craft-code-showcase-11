import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-padding border-t border-border">
      <div className="section-container">
        <Reveal>
          <p className="eyebrow mb-3">Projects</p>
          <h2 id="projects-title" className="section-title">Featured projects</h2>
          <p className="section-subtitle">
            Production platforms and personal builds, with the problem each one solves and the stack behind it.
          </p>
        </Reveal>

        {/* Featured */}
        <Reveal className="mt-12">
          <article className="surface surface-hover grid overflow-hidden md:grid-cols-2">
            <div className="border-b border-border bg-secondary md:border-b-0 md:border-r">
              <img
                src={featured.image}
                alt={`${featured.title} dashboard screenshot`}
                width={826}
                height={431}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Featured · Production</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">{featured.title}</h3>
              <p className="mt-1 text-sm text-primary">{featured.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{featured.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {featured.techStack.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
              <ProjectLinks title={featured.title} liveUrl={featured.liveUrl} githubUrl={featured.githubUrl} />
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.05}>
              <article className="surface surface-hover flex h-full flex-col overflow-hidden">
                <div className="border-b border-border bg-secondary">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      width={1200}
                      height={606}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/9] w-full object-cover object-top"
                    />
                  ) : (
                    <div aria-hidden="true" className="bg-grid flex aspect-[16/9] items-center justify-center">
                      <span className="font-mono text-sm text-muted-foreground">{p.title}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-primary">{p.summary}</p>
                  <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                    {p.techStack.map((t) => <li key={t} className="tag">{t}</li>)}
                  </ul>
                  <ProjectLinks title={p.title} liveUrl={p.liveUrl} githubUrl={p.githubUrl} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectLinks = ({ title, liveUrl, githubUrl }: { title: string; liveUrl?: string; githubUrl?: string }) => (
  <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
    {liveUrl && (
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
        Visit {title} <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    )}
    {githubUrl && (
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <Github size={14} aria-hidden="true" /> GitHub profile
      </a>
    )}
  </div>
);

export default Projects;
