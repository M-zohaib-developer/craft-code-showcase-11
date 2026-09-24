import { skillCategories } from "@/data/projects";
import Reveal from "@/components/Reveal";

const Skills = () => (
  <section id="skills" aria-labelledby="skills-title" className="section-padding border-t border-border">
    <div className="section-container">
      <Reveal>
        <p className="eyebrow mb-3">Skills</p>
        <h2 id="skills-title" className="section-title">Technical skills</h2>
        <p className="section-subtitle">The languages, frameworks, and tools I use across frontend, backend, and delivery.</p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.05}>
            <div className="surface h-full p-6">
              <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => <li key={s.name} className="tag whitespace-nowrap">{s.name}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
