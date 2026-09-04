# Interactive Resume and Discovery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `/resume` as a premium operational engineering dossier, preserve the macOS/Bear resume, and make both experiences accessible, responsive, crawlable, and verifiable.

**Architecture:** Consume the canonical career facts created by the content/PDF plan. Keep the existing manual `/resume` route and selector entry points, refactor current resume components into focused presentation units, and extend the build-time SEO generator with a dedicated static resume representation.

**Tech Stack:** React 19, TypeScript 6, Vite 8, Zustand 5, Framer Motion 12, UnoCSS/CSS, Vitest, Testing Library, Node test runner.

## Global Constraints

- `/home/kali/latex-resume/career.txt` remains the primary source of truth.
- Describe 100K+ orders as designed asynchronous capacity, never measured throughput.
- Keep Abu Dhabi Police air-gapped delivery separate from AxonERP on-premises Kubernetes.
- Only PostEx, Leopards, and M&P may be named among the nine couriers.
- Employment titles remain `Full-Stack Software Engineer`.
- Retain the confirmed 200+ Kubernetes deployments and confirmed platform technologies.
- Do not add a third resume route or redesign unrelated macOS apps.
- Reuse Framer Motion and existing patterns; add no runtime dependency.
- Critical facts must remain readable HTML without animation or expansion.
- Respect reduced motion, keyboard navigation, focus visibility, and mobile reading order.
- Preserve all pre-existing uncommitted portfolio work and commit only task-scoped files.

---

### Task 1: Derive Profile and Resume Presentation Data

**Files:**
- Modify: `src/configs/profile.ts`
- Modify: `src/configs/resume.ts`
- Create: `src/configs/resume.test.ts`

**Interfaces:**
- Consumes: `careerFacts` from `src/configs/careerFacts.ts`.
- Produces: `resumeHero`, `engineeringMetrics`, `featuredProjects`, `architectureFlows`, `skillGroups`, `resumeNav`.

- [ ] **Step 1: Write failing presentation tests**

```ts
import { expect, it } from "vitest";
import { engineeringMetrics, featuredProjects } from "./resume";

it("presents capacity without claiming measured throughput", () => {
  expect(engineeringMetrics.find((m) => m.id === "orders")?.context)
    .toContain("designed capacity");
});

it("gives logistics primary emphasis and visible evidence", () => {
  expect(featuredProjects[0].id).toBe("logistics");
  expect(featuredProjects[0].facts).toEqual(
    expect.arrayContaining(["9 courier providers", "Retry · DLQ · reprocessing"])
  );
});
```

- [ ] **Step 2: Verify RED**

Run: `pnpm test src/configs/resume.test.ts`

Expected: FAIL because metrics lack `id` and projects lack `facts`.

- [ ] **Step 3: Refactor data derivation**

Use exact interfaces:

```ts
export interface EngineeringMetric {
  id: string;
  value: string;
  context: string;
  meaning: string;
  tone: "scale" | "systems" | "recovery";
}

export interface FeaturedProject {
  id: string;
  name: string;
  priority: "flagship" | "supporting";
  facts: string[];
  problem: string;
  role: string;
  architecture: string;
  outcome: string;
  stack: string[];
}
```

Derive names, dates, metrics, links, and technical facts from `careerFacts`. Keep only display copy, ordering, and visual tone in `resume.ts`.

- [ ] **Step 4: Verify GREEN**

Run: `pnpm test src/configs/careerFacts.test.ts src/configs/resume.test.ts && pnpm typecheck`

- [ ] **Step 5: Commit**

```bash
git add src/configs/profile.ts src/configs/resume.ts src/configs/resume.test.ts
git commit -m "refactor: centralize resume evidence"
```

### Task 2: Upgrade the Dual-Resume Selector

**Files:**
- Modify: `src/components/resume/ResumeSelector.tsx`
- Modify: `src/components/resume/ResumePreview.tsx`
- Create: `src/components/resume/ResumeSelector.test.tsx`

**Interfaces:**
- Props remain `onClassic`, `onInteractive`, and `onClose`.
- Produces: a focus-contained dialog with Classic and Interactive previews.

- [ ] **Step 1: Write failing interaction tests**

```tsx
const user = userEvent.setup();
render(<ResumeSelector onClassic={classic} onInteractive={interactive} onClose={close} />);
expect(screen.getByRole("heading", { name: /choose your resume experience/i })).toBeTruthy();
await user.click(screen.getByRole("button", { name: /resume 02.*interactive/i }));
expect(interactive).toHaveBeenCalledOnce();
await user.keyboard("{Escape}");
expect(close).toHaveBeenCalledOnce();
```

Add one assertion that Tab from the final control wraps to the first dialog control and Shift+Tab wraps back.

- [ ] **Step 2: Verify RED**

Run: `pnpm test src/components/resume/ResumeSelector.test.tsx`

Expected: FAIL on heading text and focus containment.

- [ ] **Step 3: Implement selector behavior**

Use a dialog ref, capture and restore prior focus, collect enabled focusable controls, contain Tab navigation, and retain Escape handling. Render accurate Bear and dossier previews. Label buttons `Resume 01 — Classic / macOS` and `Resume 02 — Interactive / Web`.

- [ ] **Step 4: Verify GREEN and commit**

Run: `pnpm test src/components/resume/ResumeSelector.test.tsx && pnpm typecheck`

```bash
git add src/components/resume/ResumeSelector.tsx src/components/resume/ResumePreview.tsx src/components/resume/ResumeSelector.test.tsx
git commit -m "feat: refine dual resume selector"
```

### Task 3: Build the Dossier Shell, Hero, and Evidence Ledger

**Files:**
- Modify: `src/components/resume/InteractiveResume.tsx`
- Modify: `src/components/resume/EngineeringMetric.tsx`
- Create: `src/components/resume/InteractiveResume.test.tsx`

**Interfaces:**
- `InteractiveResume({ onBack }: { onBack: () => void })`.
- Renders persistent navigation, thesis hero, metric definitions, actions, and section landmarks.

- [ ] **Step 1: Write failing recruiter-scan tests**

```tsx
render(<InteractiveResume onBack={vi.fn()} />);
expect(screen.getByRole("heading", {
  name: /systems that keep moving when integrations, infrastructure, and money get complicated/i,
})).toBeTruthy();
expect(screen.getByText(/100K\+ order capacity/i)).toBeTruthy();
expect(screen.getByRole("link", { name: /download pdf/i }).getAttribute("href"))
  .toBe("/resume.pdf");
```

Assert that `9 courier providers`, `200+ client Kubernetes deployments`, and `15–30 minutes to seconds` are present before interaction.

- [ ] **Step 2: Verify RED**

Run: `pnpm test src/components/resume/InteractiveResume.test.tsx`

Expected: FAIL on thesis and evidence copy.

- [ ] **Step 3: Implement the overview**

Use semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<dl>`, and `<footer>`. Preserve title/canonical cleanup, skip link, active navigation, contact links, PDF, and desktop return. Render final metric values in initial HTML; animate only visual duplicates marked `aria-hidden`.

- [ ] **Step 4: Verify GREEN and commit**

Run: `pnpm test src/components/resume/InteractiveResume.test.tsx && pnpm typecheck`

```bash
git add src/components/resume/InteractiveResume.tsx src/components/resume/EngineeringMetric.tsx src/components/resume/InteractiveResume.test.tsx
git commit -m "feat: build recruiter-first resume overview"
```

### Task 4: Build Case Studies and Architecture Evidence

**Files:**
- Modify: `src/components/resume/ProjectCard.tsx`
- Modify: `src/components/resume/ArchitectureVisualization.tsx`
- Modify: `src/components/resume/ResumeSection.tsx`
- Create: `src/components/resume/ArchitectureVisualization.test.tsx`

**Interfaces:**
- `ProjectCard` keeps `facts` visible and toggles supporting detail.
- `ArchitectureVisualization` renders tab controls, step controls, connectors, and a complete text summary.

- [ ] **Step 1: Write failing architecture tests**

```tsx
const user = userEvent.setup();
render(<ArchitectureVisualization />);
expect(screen.getByText(/orders.*BullMQ.*SQS.*settlement/i)).toBeTruthy();
await user.click(screen.getByRole("tab", { name: /marketplace payment/i }));
expect(screen.getByText(/Stripe Connect.*refund/i)).toBeTruthy();
expect(screen.getAllByRole("tab").filter((tab) => tab.getAttribute("aria-selected") === "true"))
  .toHaveLength(1);
```

Add an ArrowRight assertion that moves tab selection and focus.

- [ ] **Step 2: Verify RED**

Run: `pnpm test src/components/resume/ArchitectureVisualization.test.tsx`

Expected: FAIL because current controls use `aria-pressed` and omit complete flow text.

- [ ] **Step 3: Implement controlled flows**

Use `role="tab"`, `aria-selected`, `aria-controls`, and ArrowLeft/ArrowRight/Home/End handling. Add labeled visual connectors and tone attributes. Render these complete visible sentences:

```text
Orders and events move through BullMQ or Amazon SQS workers, retry and DLQ recovery, nine courier adapters, a normalized logistics domain, and reconciliation and settlement.
Stripe Connect links ticket purchases to host Connected Accounts, fund holding, rule-based payouts, refunds, and reversals.
The Abu Dhabi Police system runs in a restricted air-gapped facility with on-premises Kubernetes, licensed software, domain-authenticated databases, and Linux/Windows integration.
```

Keep the flagship logistics case expanded. Supporting cases show problem, role, and facts before expansion.

- [ ] **Step 4: Verify GREEN and commit**

Run: `pnpm test src/components/resume/ArchitectureVisualization.test.tsx src/components/resume/InteractiveResume.test.tsx`

```bash
git add src/components/resume/ProjectCard.tsx src/components/resume/ArchitectureVisualization.tsx src/components/resume/ResumeSection.tsx src/components/resume/ArchitectureVisualization.test.tsx
git commit -m "feat: add interactive architecture evidence"
```

### Task 5: Apply the Operational Dossier Visual System

**Files:**
- Modify: `src/styles/interactive-resume.css`
- Modify: `src/components/resume/ExperienceTimeline.tsx`
- Modify: `src/components/resume/SkillGroup.tsx`
- Modify: `src/components/resume/InteractiveResume.test.tsx`

**Interfaces:**
- CSS tokens: `--ir-paper`, `--ir-surface`, `--ir-ink`, `--ir-slate`, `--ir-rule`, `--ir-blue`, `--ir-cyan`, `--ir-amber`.
- Breakpoints: mobile default, tablet at 48rem, desktop at 64rem.

- [ ] **Step 1: Add failing structural assertions**

```tsx
expect(screen.getByRole("region", { name: /experience/i })).toBeTruthy();
expect(screen.getByRole("region", { name: /technology/i })).toBeTruthy();
expect(screen.getAllByText(/Full-Stack Software Engineer/).length).toBeGreaterThan(0);
expect(screen.getByRole("contentinfo")).toBeTruthy();
```

- [ ] **Step 2: Verify RED**

Run: `pnpm test src/components/resume/InteractiveResume.test.tsx`

Expected: FAIL until sections expose stable accessible names and footer semantics.

- [ ] **Step 3: Implement visual and responsive states**

Replace graphite/copper with the approved palette. Use Plus Jakarta Sans for body, a restrained system serif for the hero thesis, and monospace for evidence labels. Implement a desktop evidence rail, asymmetrical hero, ruled low-radius cards, sticky mobile header, vertical mobile flows, 44px touch targets, visible `:focus-visible`, and a complete `prefers-reduced-motion` override.

- [ ] **Step 4: Verify GREEN and commit**

Run: `pnpm test && pnpm typecheck`

```bash
git add src/styles/interactive-resume.css src/components/resume/ExperienceTimeline.tsx src/components/resume/SkillGroup.tsx src/components/resume/InteractiveResume.test.tsx
git commit -m "style: deliver operational dossier design"
```

### Task 6: Generate Static Resume SEO and AI Profiles

**Files:**
- Modify: `scripts/seo-data.mjs`
- Modify: `scripts/generate-seo.mjs`
- Create: `scripts/generate-seo.test.mjs`
- Modify: `vite.config.ts`
- Regenerate: `resume/index.html`
- Regenerate: `public/robots.txt`
- Regenerate: `public/sitemap.xml`
- Regenerate: `public/llm.txt`
- Regenerate: `public/llms.txt`
- Modify: `vercel.json`

**Interfaces:**
- `generateSeo({ root, now })` writes deterministic assets.
- Consumes: `src/configs/careerFacts.json` through JSON import attributes.

- [ ] **Step 1: Write failing generator tests**

```js
test("generates a crawlable qualified resume", () => {
  const html = readFileSync(join(tempRoot, "resume/index.html"), "utf8");
  assert.match(html, /ProfilePage/);
  assert.match(html, /designed.*100K\+.*asynchronous/i);
  assert.match(html, /canonical.*\/resume/);
});

test("publishes routes without private AI-profile data", () => {
  assert.match(sitemap, /\/resume<\/loc>/);
  assert.doesNotMatch(llms, /24 May 2001|\+92 309/);
});
```

- [ ] **Step 2: Verify RED**

Run: `node --test scripts/generate-seo.test.mjs`

Expected: FAIL because the generator has no dedicated static resume output or injectable root.

- [ ] **Step 3: Implement deterministic generation**

Export `generateSeo({ root, now = new Date() })`. Import canonical JSON. Generate `resume/index.html` as a Vite HTML entry containing resume metadata, semantic fallback content, `<div id="root">`, and the `/src/index.tsx` module script. Register root and resume HTML entries in `vite.config.ts`. Remove the `/resume` rewrite that would bypass the built HTML. Add Person/ProfilePage JSON-LD and a PDF existence guard. Generate sitemap entries for `/resume` and `/resume.pdf`, allow public crawlers, and emit both LLM files without DOB, phone, secrets, or private infrastructure details.

- [ ] **Step 4: Verify GREEN and regenerate**

Run:

```bash
node --test scripts/generate-seo.test.mjs
pnpm generate:seo
```

Expected: PASS and deterministic assets.

- [ ] **Step 5: Commit**

```bash
git add scripts/seo-data.mjs scripts/generate-seo.mjs scripts/generate-seo.test.mjs vite.config.ts resume/index.html public/robots.txt public/sitemap.xml public/llm.txt public/llms.txt vercel.json
git commit -m "feat: make interactive resume discoverable"
```

### Task 7: Synchronize Classic Content and Route Behavior

**Files:**
- Modify: `public/markdown/resume.md`
- Modify: `src/utils/resumeRoute.ts`
- Create: `src/utils/resumeRoute.test.ts`
- Verify unchanged behavior: `src/pages/Desktop.tsx`
- Verify unchanged behavior: `src/components/apps/Bear.tsx`

**Interfaces:**
- `isInteractiveResumePath(path?: string): boolean`.
- `openInteractiveResume(): void`.
- `closeInteractiveResume(): void`.

- [ ] **Step 1: Write route tests**

```ts
expect(isInteractiveResumePath("/resume")).toBe(true);
expect(isInteractiveResumePath("/resume/")).toBe(true);
expect(isInteractiveResumePath("/resume-old")).toBe(false);
closeInteractiveResume();
expect(window.location.pathname).toBe("/");
```

Count `popstate` events and require exactly one event per navigation function.

- [ ] **Step 2: Verify RED or characterize existing behavior**

Run: `pnpm test src/utils/resumeRoute.test.ts`

Expected: tests establish whether current push-state behavior already passes. If they pass, do not change route code merely to create a diff.

- [ ] **Step 3: Synchronize Classic markdown**

Rewrite the Bear document with the same factual priorities as the PDF: logistics architecture, qualified 100K+ capacity, nine couriers, recovery loop, reconciliation, Abu Dhabi Police, Stripe Connect, production AI, and AxonERP platform ownership. Preserve markdown rendering and current Bear navigation.

- [ ] **Step 4: Verify and commit**

Run: `pnpm test src/utils/resumeRoute.test.ts src/components/resume/ResumeSelector.test.tsx && pnpm typecheck`

```bash
git add public/markdown/resume.md src/utils/resumeRoute.test.ts
git add src/utils/resumeRoute.ts
git commit -m "feat: synchronize classic and web resumes"
```

### Task 8: Full Production and Browser Validation

**Files:**
- Verify all resume, test, generated SEO, markdown, and PDF files.
- Create no permanent QA report.

**Interfaces:**
- Produces: validated local production output.

- [ ] **Step 1: Run automated verification**

Run:

```bash
pnpm test
pnpm typecheck
pnpm build
```

Expected: all commands exit 0 with no newly introduced warnings.

- [ ] **Step 2: Inspect generated discovery assets**

Verify `dist/robots.txt`, `dist/sitemap.xml`, `dist/llm.txt`, `dist/llms.txt`, `dist/resume/index.html`, and `dist/resume.pdf`. Confirm qualified metrics, canonical URL, JSON-LD, public links, and no DOB/phone in AI profiles.

- [ ] **Step 3: Test production navigation**

Start `pnpm serve`. In the browser verify:

- Desktop Resume icon opens the selector.
- Classic opens Bear with updated content.
- Interactive opens `/resume`.
- Direct `/resume` works.
- PDF resolves.
- Back returns to `/`.
- Console remains error-free.

- [ ] **Step 4: Test responsive and accessible behavior**

Capture and inspect screenshots at 1440×900, 1024×768, 768×1024, 390×844, and 360×800. Use keyboard only for selector, tabs, project disclosure, actions, and return controls. Emulate reduced motion. Confirm focus visibility, no horizontal overflow, and no hover-only facts.

- [ ] **Step 5: Audit performance**

Measure the production resume under representative local throttling. Fix any regression preventing LCP ≤2.5s, INP ≤200ms, or CLS ≤0.1.

- [ ] **Step 6: Reinspect the PDF and facts**

Confirm one or two PDF pages, inspect every rendered page, extract its text, and test embedded URLs. Compare PDF, Classic markdown, interactive HTML, static HTML, JSON-LD, and LLM profiles against `career.txt` plus the recorded confirmation. Ensure no output claims measured 100K+ production throughput.

- [ ] **Step 7: Commit scoped validation fixes**

If validation changed files, stage only these known paths:

```bash
git add src/components/resume src/configs/profile.ts src/configs/resume.ts src/styles/interactive-resume.css src/utils/resumeRoute.ts public/markdown/resume.md public/resume.pdf resume/index.html public/robots.txt public/sitemap.xml public/llm.txt public/llms.txt scripts/generate-seo.mjs scripts/seo-data.mjs vite.config.ts vercel.json
git commit -m "fix: resolve dual resume validation findings"
```
