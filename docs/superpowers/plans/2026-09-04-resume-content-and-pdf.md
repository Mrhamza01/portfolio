# Resume Content and PDF Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish canonical, tested career facts and produce an accurate, ATS-friendly LaTeX resume of no more than two pages.

**Architecture:** Keep `career.txt` as the human-authored source and create a structured JSON derivative for the portfolio. Preserve the existing sb2nov LaTeX template, rewrite only its content and necessary spacing, compile with pdfTeX, inspect every page, and publish the same PDF at `/resume.pdf`.

**Tech Stack:** TypeScript 6, JSON, Vitest, Vite 8, Node 24, pdflatex, Poppler.

## Global Constraints

- `/home/kali/latex-resume/career.txt` remains the primary source of truth.
- Describe 100K+ orders as designed asynchronous capacity, never measured throughput.
- Keep Abu Dhabi Police air-gapped delivery separate from AxonERP on-premises Kubernetes.
- Only PostEx, Leopards, and M&P may be named among the nine couriers.
- Employment titles remain `Full-Stack Software Engineer`.
- Retain the confirmed 200+ Kubernetes deployments and confirmed platform technologies.
- Critical facts must remain readable without animation or expansion.
- `hamza.tex` and `career.txt` are outside the portfolio Git repository.
- Preserve all pre-existing uncommitted work and commit only task-scoped portfolio files.

---

### Task 1: Add the Test Harness and Canonical Career Facts

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify: `vite.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/configs/careerFacts.json`
- Create: `src/configs/careerFacts.ts`
- Create: `src/configs/careerFacts.test.ts`
- Modify: `/home/kali/latex-resume/career.txt`

**Interfaces:**
- Produces: `careerFacts`, `CareerFacts`, `CareerMetric`, `CareerProject`, `CareerRole`.
- Consumers: profile, interactive resume, Classic markdown, SEO generator, and LLM profiles.

- [ ] **Step 1: Install test-only dependencies**

Run:

```bash
pnpm add -D vitest jsdom @testing-library/react @testing-library/user-event
```

Add package scripts:

```json
"test": "vitest run",
"test:watch": "vitest",
"typecheck": "tsc --noEmit"
```

Change `vite.config.ts` to import `defineConfig` from `vitest/config`, then add:

```ts
test: {
  environment: "jsdom",
  setupFiles: ["./src/test/setup.ts"],
  restoreMocks: true,
}
```

Use `src/test/setup.ts` to call Testing Library `cleanup()` after each test.

- [ ] **Step 2: Write the failing fact contract**

```ts
import { describe, expect, it } from "vitest";
import { careerFacts } from "./careerFacts";

describe("careerFacts", () => {
  it("qualifies scale and separates deployment contexts", () => {
    expect(careerFacts.metrics.find((m) => m.id === "orders")?.qualifier)
      .toBe("designed asynchronous processing capacity");
    expect(careerFacts.deployments.airGapped.client).toBe("Abu Dhabi Police");
    expect(careerFacts.deployments.axonKubernetes.client).toBe("AxonERP clients");
  });

  it("contains required senior-engineering evidence", () => {
    expect(careerFacts.integrations.courierCount).toBe(9);
    expect(careerFacts.integrations.namedCouriers).toEqual(["PostEx", "Leopards", "M&P"]);
    expect(careerFacts.messaging.technologies).toEqual(["BullMQ", "Amazon SQS"]);
    expect(careerFacts.payments.platform).toBe("Stripe Connect");
    expect(careerFacts.confirmed.axonDeploymentCount).toBe(200);
  });
});
```

- [ ] **Step 3: Verify RED**

Run: `pnpm test src/configs/careerFacts.test.ts`

Expected: FAIL because `careerFacts` does not exist.

- [ ] **Step 4: Implement canonical facts**

Create JSON sections named `identity`, `roles`, `metrics`, `deployments`, `integrations`, `messaging`, `payments`, `ai`, `projects`, `skills`, `education`, `certifications`, and `confirmed`.

Export typed data:

```ts
import data from "./careerFacts.json";
export type CareerFacts = typeof data;
export type CareerMetric = CareerFacts["metrics"][number];
export type CareerProject = CareerFacts["projects"][number];
export type CareerRole = CareerFacts["roles"][number];
export const careerFacts: CareerFacts = data;
```

Record in `career.txt` that Hamza explicitly confirmed on 2026-09-04: 200+ client Kubernetes deployments, Prometheus/Grafana, NGINX Ingress, cert-manager, Redis, tenant isolation, n8n, and WhatsApp Business API.

- [ ] **Step 5: Verify GREEN**

Run: `pnpm test src/configs/careerFacts.test.ts && pnpm typecheck`

Expected: PASS.

- [ ] **Step 6: Commit portfolio files**

```bash
git add package.json pnpm-lock.yaml vite.config.ts src/test/setup.ts src/configs/careerFacts.json src/configs/careerFacts.ts src/configs/careerFacts.test.ts
git commit -m "test: establish canonical career facts"
```

### Task 2: Rewrite the Existing LaTeX Resume

**Files:**
- Modify: `/home/kali/latex-resume/hamza.tex`
- Regenerate: `/home/kali/latex-resume/hamza.pdf`

**Interfaces:**
- Consumes: confirmed facts from Task 1.
- Produces: ATS-readable application PDF.

- [ ] **Step 1: Capture the missing-content failure**

Run:

```bash
python -c "from pathlib import Path; t=Path('/home/kali/latex-resume/hamza.tex').read_text(); required=['Stripe Connect','BullMQ','100K+','Abu Dhabi Police','dead-letter']; missing=[x for x in required if x not in t]; assert not missing, f'missing {missing}'"
```

Expected: FAIL with missing evidence.

- [ ] **Step 2: Rewrite content within the template**

Preserve the header, macros, section hierarchy, letter paper, Unicode extraction, and hidden-link styling. Add these evidence-led themes:

```tex
\resumeItem{\textbf{Multi-courier architecture:} Designed core integration and settlement workflows across 9 courier providers using a normalized logistics domain and BullMQ/Amazon SQS workers, with rate-limit-aware concurrency, retries, dead-letter queues, correction, and reprocessing for 100K+ designed order capacity.}
\resumeItem{\textbf{Marketplace payments:} Owned Stripe Connect flows for ticket payments, Connected Accounts, fund holding, delayed rule-based transfers/payouts, refunds, and reversals.}
\resumeItem{\textbf{Enterprise delivery:} Deployed the Abu Dhabi Police sustainability platform to air-gapped on-premises Kubernetes with licensed-software, domain-authentication, and Linux/Windows constraints.}
```

Retain the confirmed AxonERP fleet, observability, ingress, Redis, tenant-isolation, n8n, and WhatsApp Business API evidence. Replace the unsupported standalone “WhatsApp Chrome Extension” framing with the production AI order-creation workflow. Remove project bullets that merely repeat experience.

- [ ] **Step 3: Compile twice**

Run:

```bash
cd /home/kali/latex-resume
pdflatex -interaction=nonstopmode -halt-on-error hamza.tex
pdflatex -interaction=nonstopmode -halt-on-error hamza.tex
pdfinfo hamza.pdf
```

Expected: successful compile and `Pages: 1` or `Pages: 2`.

- [ ] **Step 4: Verify content and hyperlinks**

Run:

```bash
python -c "import subprocess; t=subprocess.check_output(['pdftotext','/home/kali/latex-resume/hamza.pdf','-'],text=True); required=['Stripe Connect','BullMQ','100K+','Abu Dhabi Police','dead-letter']; missing=[x for x in required if x not in t]; assert not missing, f'missing {missing}'"
pdfinfo -url /home/kali/latex-resume/hamza.pdf
```

Expected: all themes and public links are present.

- [ ] **Step 5: Render and inspect every page**

Run:

```bash
pdftoppm -png -r 150 /home/kali/latex-resume/hamza.pdf /tmp/hamza-resume
```

Read each generated PNG. Confirm readable typography, no clipping or overflow, balanced page breaks, consistent spacing, and no excessive whitespace.

### Task 3: Publish and Guard the PDF

**Files:**
- Modify: `public/resume.pdf`
- Create: `scripts/resume-pdf.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: stable public `/resume.pdf`.
- Test accepts `RESUME_SOURCE` with default `../hamza.pdf`.

- [ ] **Step 1: Write the failing PDF guard**

```js
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import test from "node:test";

test("public resume PDF exists and is non-empty", () => {
  assert.equal(existsSync("public/resume.pdf"), true);
  assert.ok(statSync("public/resume.pdf").size > 50_000);
});
```

Add `test:seo` as `node --test scripts/*.test.mjs`.

- [ ] **Step 2: Verify RED against a temporarily missing destination**

Move the existing generated PDF outside `public`, run `pnpm test:seo`, and confirm the guard fails because `public/resume.pdf` is absent. Restore it immediately after the assertion.

- [ ] **Step 3: Publish the compiled PDF**

Copy `/home/kali/latex-resume/hamza.pdf` to `public/resume.pdf`.

- [ ] **Step 4: Verify GREEN**

Run: `pnpm test:seo && pdfinfo public/resume.pdf`

Expected: PASS and one or two pages.

- [ ] **Step 5: Commit**

```bash
git add package.json scripts/resume-pdf.test.mjs public/resume.pdf
git commit -m "docs: publish updated engineering resume"
```
