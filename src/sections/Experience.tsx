import { experiences } from "@/data/projects";
import Reveal from "@/components/Reveal";

const Experience = () => (
  <section id="experience" aria-labelledby="experience-title" className="section-padding border-t border-border">
    <div className="section-container">
      <Reveal>
        <p className="eyebrow mb-3">Experience</p>
        <h2 id="experience-title" className="section-title">Work and project history</h2>
        <p className="section-subtitle">
          Production work at MoboCheck and Automatev, plus personal and university projects. See the related
          work in <a href="#projects" className="text-primary underline-offset-4 hover:underline">featured projects</a>.
        </p>
      </Reveal>

      <ol className="relative mt-12 space-y-6 border-l border-border pl-6 md:pl-8">
        {experiences.map((exp, i) => (
          <li key={exp.id} className="relative">
            <span aria-hidden="true" className="absolute -left-[29px] top-6 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background md:-left-[37px]" />
            <Reveal delay={Math.min(i, 3) * 0.04}>
              <article className="surface p-6 md:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                </div>
                <p className="mt-1 text-sm text-primary">{exp.company}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
