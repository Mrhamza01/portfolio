import { Fragment, useEffect, useState } from "react";
import {
  EMAIL_URL,
  RESUME_URL,
  beyond,
  contact,
  education,
  hero,
  ledger,
  milestones,
  navLinks,
  openSource,
  principles,
  roles,
  skillGroups,
  systems,
} from "./content";
import type { SystemStudy } from "./content";
import SceneCanvas from "./components/SceneCanvas";
import FlowDiagram from "./components/FlowDiagram";
import FailureSim from "./components/FailureSim";
import { useReducedMotion, useScrollStory } from "./useScrollStory";

/** Which particle formation sits behind each system study. */
const FORMATION: Record<string, number> = { logistics: 2, payments: 2, airgap: 3, fleet: 1, agents: 2 };

function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="bar">
      <div className="bar-progress" aria-hidden="true" />
      <a className="bar-name" href="#top">
        Hamza Ghafoor
      </a>
      <nav className="bar-nav" aria-label="Sections" data-open={open}>
        {navLinks.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            aria-current={active === l.id || (l.id === "systems" && active.startsWith("system-")) ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a className="bar-switch" href="/classic/">
          Classic macOS version
        </a>
      </nav>
      <a className="btn btn-small" href={RESUME_URL} target="_blank" rel="noopener">
        Resume PDF
      </a>
      <button
        type="button"
        className="bar-menu"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

function Hero() {
  const words = hero.thesis.split(" ");
  return (
    <section className="hero" id="top" data-formation="0" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title" aria-label={hero.thesis}>
          {words.map((w, i) => (
            <Fragment key={i}>
              <span className="word" aria-hidden="true" style={{ ["--i" as string]: i }}>
                <span>{w}</span>
              </span>{" "}
            </Fragment>
          ))}
        </h1>
        <p className="hero-role">
          {hero.role} {hero.sub}
        </p>
        <div className="hero-actions">
          <a className="btn" href={RESUME_URL} target="_blank" rel="noopener">
            Download resume (PDF)
          </a>
          <a className="btn btn-ghost" href={EMAIL_URL}>
            Email me
          </a>
        </div>
        <p className="hero-availability">{hero.availability}</p>
      </div>
      <p className="hero-caption">{hero.sceneCaption}</p>
    </section>
  );
}

function Ledger() {
  return (
    <section className="ledger wrap" aria-labelledby="ledger-title">
      <h2 id="ledger-title" className="kicker">
        The short version
      </h2>
      <dl>
        {ledger.map((row) => (
          <div key={row.unit}>
            <dt>
              <span className="figure">{row.figure}</span> <span className="unit">{row.unit}</span>
            </dt>
            <dd>{row.meaning}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="wrap chapter" data-formation="1" aria-labelledby="journey-title">
      <h2 id="journey-title" className="display">
        How I got here
      </h2>
      <p className="lede">
        Four years from first commit in production to owning payments, logistics and platform work. The grid beside
        this is the AxonERP fleet: one cell per client deployment.
      </p>
      <ol className="timeline">
        {milestones.map((m) => (
          <li key={m.title}>
            <span className="when">{m.when}</span>
            <h3>{m.title}</h3>
            <p>{m.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function System({ study, reducedMotion }: { study: SystemStudy; reducedMotion: boolean }) {
  const dark = study.id === "airgap";
  return (
    <section
      id={`system-${study.id}`}
      className={`system${dark ? " system-dark" : ""}${FORMATION[study.id] !== 2 ? " system-side" : ""}`}
      data-formation={FORMATION[study.id]}
      data-tone={dark ? "dark" : undefined}
      aria-labelledby={`system-${study.id}-title`}
    >
      <div className="wrap">
        <p className="system-company">{study.company}</p>
        <h3 id={`system-${study.id}-title`} className="system-title">
          {study.title}
        </h3>
        <p className="lede">{study.lede}</p>
        <div className="system-grid">
          <div className="system-problem">
            <h4>The problem</h4>
            <p>{study.problem}</p>
            <h4>What it led to</h4>
            <ul className="outcomes">
              {study.outcome.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
          <div className="system-decisions">
            <h4>Decisions I made</h4>
            <ul>
              {study.decisions.map((d) => (
                <li key={d.title}>
                  <strong>{d.title}.</strong> {d.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {study.id === "logistics" ? (
          <FailureSim reducedMotion={reducedMotion} />
        ) : (
          <FlowDiagram steps={study.flow} caption={study.flowCaption} />
        )}
        <ul className="stack" aria-label="Technology used">
          {study.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="wrap chapter" data-formation="2" aria-labelledby="experience-title">
      <h2 id="experience-title" className="display">
        Where I did it
      </h2>
      <div className="roles">
        {roles.map((r) => (
          <article key={r.company} className="role">
            <header>
              <img src={r.logo} alt="" width="44" height="44" loading="lazy" />
              <div>
                <h3>
                  {r.role}, <a href={r.url} target="_blank" rel="noopener">{r.company}</a>
                </h3>
                <p className="when">{r.period}</p>
                {r.note && <p className="role-note">{r.note}</p>}
              </div>
            </header>
            <ul>
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="aside-grid">
        <div>
          <h3 className="kicker">Education</h3>
          <p>
            {education.degree}, {education.school}
            <br />
            <span className="when">{education.years}</span>
          </p>
          <ul className="plain">
            {education.certs.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="kicker">Open source</h3>
          <ul className="plain">
            {openSource.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noopener">
                  {p.name}
                </a>{" "}
                <span className="when">{p.stack}</span>
                <br />
                {p.body}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="wrap chapter" aria-labelledby="skills-title">
      <h2 id="skills-title" className="display">
        What I work with
      </h2>
      <p className="lede">Grouped by the job each tool does in production. All of it is in the work above.</p>
      <dl className="skills">
        {skillGroups.map((g) => (
          <div key={g.job}>
            <dt>{g.job}</dt>
            <dd>{g.tools}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="wrap chapter" aria-labelledby="approach-title">
      <h2 id="approach-title" className="display">
        How I think about systems
      </h2>
      <ol className="principles">
        {principles.map((p) => (
          <li key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <p className="proof">
              <span>Where I did this:</span> {p.proof}
            </p>
          </li>
        ))}
      </ol>
      <h2 className="display display-second">Beyond the code</h2>
      <div className="beyond">
        {beyond.map((b) => (
          <div key={b.title}>
            <h3>{b.title}</h3>
            <p>{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact" data-formation="4" data-tone="dark" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title" className="display">
          If your system has to keep moving, let&rsquo;s talk.
        </h2>
        <p className="lede">{hero.availability}</p>
        <div className="hero-actions">
          <a className="btn" href={EMAIL_URL}>
            Email {contact.email}
          </a>
          <a className="btn btn-ghost" href={RESUME_URL} target="_blank" rel="noopener">
            Download resume (PDF)
          </a>
        </div>
        <ul className="contact-links">
          <li>
            <a href={contact.linkedin} target="_blank" rel="noopener">
              LinkedIn <span>{contact.linkedinLabel}</span>
            </a>
          </li>
          <li>
            <a href={contact.github} target="_blank" rel="noopener">
              GitHub <span>{contact.githubLabel}</span>
            </a>
          </li>
          <li>
            <a href={contact.whatsapp} target="_blank" rel="noopener">
              WhatsApp <span>{contact.phone}</span>
            </a>
          </li>
        </ul>
        <footer className="foot">
          <p>Designed and built by Hamza Ghafoor with React, three.js and Lenis.</p>
          <p>
            <a href="/classic/">Classic macOS version</a>
            <a href="/">Portfolio chooser</a>
          </p>
        </footer>
      </div>
    </section>
  );
}

export default function App() {
  const reducedMotion = useReducedMotion();
  const { subscribe, active } = useScrollStory(reducedMotion);
  return (
    <>
      <a className="skip" href="#journey">
        Skip to content
      </a>
      <SceneCanvas subscribe={subscribe} reducedMotion={reducedMotion} />
      <Header active={active} />
      <main>
        <Hero />
        <Ledger />
        <Journey />
        <section id="systems" className="systems-intro wrap" data-formation="2" aria-labelledby="systems-title">
          <h2 id="systems-title" className="display">
            Systems I have built
          </h2>
          <p className="lede">Five pieces of production work: the problem, the decisions that mattered, and what came of them.</p>
        </section>
        {systems.map((s) => (
          <System key={s.id} study={s} reducedMotion={reducedMotion} />
        ))}
        <Experience />
        <Skills />
        <Approach />
        <Contact />
      </main>
    </>
  );
}
