import React, { useState } from "react";
import { caseStudies, type CaseStudy } from "~/configs/caseStudies";

function DiagramFlow({ steps }: { steps: CaseStudy["diagramSteps"] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-4 px-2">
      {steps.map((step, i) => (
        <React.Fragment key={step.label}>
          <div className="flex flex-col items-center gap-1.5 min-w-[4.5rem] max-w-[5.5rem]">
            <div className="size-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-sm flex-center">
              <span className={`${step.icon} text-xl text-blue-500 dark:text-blue-400`} />
            </div>
            <span className="text-[10px] text-center font-medium text-gray-700 dark:text-gray-200 leading-tight">
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span className="i-heroicons-outline:arrow-right text-gray-400 text-lg shrink-0 hidden sm:inline" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function CaseStudyPanel({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 h-full min-h-0">
      <div className="lg:w-[42%] shrink-0 rounded-xl bg-gray-100/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-600/40">
        <p className="text-[10px] font-bold uppercase tracking-wider opacity-50 px-4 pt-3">Flow</p>
        <DiagramFlow steps={study.diagramSteps} />
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-sm text-gray-800 dark:text-gray-100 scrollbar-hide">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">Problem</h3>
          <ul className="space-y-1.5">
            {study.problem.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-red-500 shrink-0">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">Solution</h3>
          <ul className="space-y-1.5">
            {study.solution.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-500 shrink-0">→</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">Stack</h3>
          <div className="flex flex-wrap gap-1.5">
            {study.stack.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">Outcomes</h3>
          <ul className="space-y-1.5">
            {study.outcomes.map((o, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-600 dark:text-green-400 shrink-0">✓</span>
                <span className="font-medium">{o}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default function Architecture() {
  const [activeId, setActiveId] = useState(caseStudies[0].id);
  const study = caseStudies.find((s) => s.id === activeId) ?? caseStudies[0];

  return (
    <div className="size-full flex flex-col bg-[color:var(--color-background)] dark:bg-[#0c0c0e] font-avenir">
      <div className="px-4 pt-4 pb-2 border-b border-[color:var(--color-border)] shrink-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)] mb-1">
          Architecture
        </p>
        <h1 className="text-lg font-semibold tracking-tight text-[color:var(--color-foreground)]">{study.title}</h1>
        <p className="text-xs opacity-60 dark:text-gray-300 mt-0.5">{study.subtitle}</p>
        <div className="flex gap-1 mt-3 p-0.5 bg-[color:var(--color-muted)] dark:bg-gray-800 rounded-lg w-fit">
          {caseStudies.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`px-3 py-1 text-xs font-medium rounded-md transition ${
                activeId === s.id
                  ? "bg-white dark:bg-gray-600 shadow text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={() => setActiveId(s.id)}
            >
              {s.id === "erp-platform" ? "ERP Platform" : "CI/CD Pipeline"}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 min-h-0 p-4 overflow-hidden">
        <CaseStudyPanel study={study} />
      </div>
    </div>
  );
}
