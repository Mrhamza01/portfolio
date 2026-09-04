# Dual Resume System Design

Date: 2026-09-04
Status: Approved

## Objective

Upgrade Hamza Ghafoor's resume system into two deliberately different experiences:

1. Resume 01 — Classic / macOS: preserve the existing Bear/macOS document experience.
2. Resume 02 — Interactive / Web: create a premium, recruiter-oriented engineering profile that communicates senior-level ownership through evidence, architecture, scale, and production outcomes.

The LaTeX resume remains the ATS-friendly application document. The web resume complements it; it does not replace it.
## Source of Truth and Accuracy Policy

`/home/kali/latex-resume/career.txt` is the primary content source.

The implementation must:

- Use only claims present in `career.txt`, public professional evidence, or facts explicitly confirmed by Hamza.
- Preserve distinctions between personal ownership, team contribution, and product context.
- Describe 100K+ orders as designed asynchronous processing capacity, not measured throughput.
- Keep the Abu Dhabi Police air-gapped deployment separate from AxonERP's on-premises Kubernetes work.
- Avoid implying that all nine couriers are publicly named; only PostEx, Leopards, and M&P are named.
- Avoid unsupported payment-compliance, KYC/AML, accounting, uptime, latency, cost, user-count, and revenue claims.
- Preserve accurate employment titles while targeting senior roles through the headline and evidence.

Hamza explicitly confirmed the accuracy of the previously flagged existing-resume claims: 200+ client Kubernetes deployments, Prometheus/Grafana, NGINX Ingress, cert-manager, Redis, tenant isolation, n8n, and WhatsApp Business API. `career.txt` should be updated to record this confirmation before those claims are reused.
## Existing System

The portfolio is a React 19, TypeScript, Vite, Zustand, and UnoCSS SPA with a macOS desktop shell.

The current resume system already contains:

- A Bear-based classic resume sourced from `public/markdown/resume.md`.
- A resume selector modal.
- A client-rendered `/resume` route.
- Resume-specific components and isolated CSS.
- Build-time SEO generation through `scripts/generate-seo.mjs`.

This design evolves those foundations. It does not introduce a third resume experience or rewrite unrelated desktop functionality.
## Chosen Product Approach

Three approaches were considered:

1. Refine the existing `/resume` experience in place.
2. Add a separate versioned web-resume route.
3. Replace the SPA route with a standalone static resume microsite.

The chosen approach is the first: rebuild Resume 02 in place at `/resume`.

Reasons:

- Visitors see exactly two choices.
- Existing entry points and deep links remain valid.
- The macOS experience stays intact.
- Current React, Framer Motion, Zustand, and styling patterns can be reused.
- Route, deployment, and analytics complexity stays low.
- Dedicated static SEO output can supplement the client-rendered route without splitting the product.

## Audience and Page Job

Primary audience:

- Recruiters scanning for role fit, seniority, location, and keywords.
- Engineering managers evaluating system depth and ownership.
- Technical interviewers looking for architecture and reliability evidence.

The page's single job is to make Hamza's senior-level engineering profile understandable within seconds and credible under deeper inspection.
The first viewport must answer:

- Who is Hamza?
- Which roles is he targeting?
- What kinds of systems does he build?
- What scale and complexity has he handled?
- Where can the reader get the PDF, contact him, or inspect proof?

## Information Architecture

### Persistent header

Provide:

- Name and role.
- Compact section navigation.
- Download PDF.
- Contact.
- Return to macOS portfolio.

On mobile, this becomes a compact sticky bar with accessible navigation.
### Hero: engineering thesis

Lead with a concrete statement:

> I build production systems that keep moving when integrations, infrastructure, and money get complicated.

Support it with:

- Senior Software Engineer / Senior Full-Stack Engineer positioning.
- Production experience since November 2022.
- SaaS and restricted enterprise delivery.
- Primary domains: integrations, async processing, payments, AI workflows, and Kubernetes.
- Email, LinkedIn, GitHub, and PDF actions.

The hero must contain real HTML text and cannot depend on animation.

### Evidence ledger

Show factual scale signals with context and meaning:

- 9 courier providers — heterogeneous APIs unified behind one logistics domain.
- 100K+ orders — asynchronous processing capacity by design.
- 200+ client Kubernetes deployments — confirmed existing experience.
- 15–30 minutes to seconds — order-capture workflow compression.
- Hours to minutes — automated deployment-cycle reduction.
- SaaS, on-premises Kubernetes, and air-gapped enterprise delivery — distinct operating environments.

Numbers must never appear as context-free counters.
### Flagship system

Give the multi-courier logistics and settlement platform the most visual space.

The section explains:

- The fragmented operational problem.
- Hamza's role in core processing, integration, and settlement architecture.
- Nine-provider adapter model.
- Normalized internal logistics domain.
- BullMQ and Amazon SQS workers where applicable.
- Rate-limit-aware concurrency.
- Retry, backoff, DLQ isolation, correction, and reprocessing.
- CPR/invoice reconciliation, contractual charge matching, settlement, claims, and net receivables.
- 100K+ asynchronous order capacity.

Important facts remain visible by default. Expandable details provide constraints, architecture decisions, and recovery behavior.
### Additional systems

Present four supporting case studies:

1. Abu Dhabi Police sustainability deployment.
2. Stripe Connect events marketplace payments.
3. Production AI and order-creation agents.
4. AxonERP full-stack platform, CI/CD, and on-premises Kubernetes.

Each case study contains:

- Problem.
- Role.
- Constraints.
- Architecture.
- Scale or operating environment.
- Reliability considerations.
- Outcome.
- Technology metadata.

### Architecture evidence map

The page's signature element is a controlled, readable system map rather than a free-form graph.

It provides three selectable flows:

1. Distributed logistics processing.
2. Marketplace payment movement.
3. Air-gapped enterprise delivery.

The logistics flow:

`orders/events → BullMQ or SQS → concurrent workers → retry/DLQ/reprocessing → courier adapters → normalized domain → reconciliation/settlement`

The marketplace flow:

`ticket purchase → Stripe Connect → connected account relationship → platform balance/holding → rule-based transfer/payout → refund/reversal`

The enterprise flow:

`restricted facility → air-gapped on-premises Kubernetes → licensed software constraints → domain-authenticated databases → Linux/Windows integration`

Visual rules:

- Clearly distinguish synchronous actions, asynchronous work, third parties, and internal systems.
- Use labeled connectors and a legend.
- Highlight one flow at a time.
- Provide an equivalent textual explanation.
- Do not mix unrelated abstraction levels.
- On mobile, convert the map into a vertical sequence.

### Experience

Use a conventional reverse-chronological structure:

- MilestoneZero — Full-Stack Software Engineer — Dec 2025 to Present.
- AxonERP / Axon — Full-Stack Software Engineer — Nov 2022 to Nov 2025.

Use short evidence-led bullets. Preserve dates and titles. Include technical interviewing as a leadership signal without overstating management responsibility.

### Capability groups

Group technologies by production function:

- Languages.
- Frontend.
- Backend and APIs.
- Data.
- Messaging and workers.
- Infrastructure and delivery.
- Cloud.
- Payments.
- AI and automation.
- Integration architecture.

Do not use logo walls, proficiency bars, or unsupported skill ratings.

### Proof and contact

Include:

- Public GitHub projects, especially ARCHARCH and AI Article Summarizer.
- Education.
- Certifications.
- GitHub, LinkedIn, email, portfolio URL, and PDF.

Professional systems without public links must not display fake proof links.
## Visual Direction

Name: Operational engineering dossier.
The design should feel like a carefully prepared engineering record, not a dashboard, résumé template, or marketing page.

### Palette

- Paper: `#F2F4F5`.
- Surface: `#FFFFFF`.
- Ink: `#111820`.
- Slate: `#596773`.
- Rule: `#C9D1D8`.
- Signal blue: `#2257D6`.
- Systems cyan: `#137F91`.
- Recovery amber: `#A55B20`.

Color encodes meaning:

- Blue: primary actions and current selection.
- Cyan: systems and async movement.
- Amber: failure handling, recovery, and operational constraints.

### Typography

- Reuse the project's Plus Jakarta Sans for readable body and interface text.
- Use a restrained serif/system editorial face for the hero thesis only.
- Use a system monospace stack for evidence labels, identifiers, dates, and flow annotations.

No additional JavaScript design dependency is required.
### Composition

- Wide desktop layout with a narrow evidence rail and main narrative column.
- Strong rules, alignment, and whitespace.
- Low-radius cards; avoid generic floating SaaS tiles.
- Selective asymmetry in the hero and flagship case study.
- Dense enough to signal technical substance, but never cramped.

### Motion

Use Framer Motion and CSS already present in the project.

Allow:

- One orchestrated hero entrance.
- Subtle section reveals.
- Flow-path highlighting when a step is selected.
- Short metric count-up only when the exact value is readable before and after animation.
- Small card-state transitions.

Disallow:

- Scroll hijacking.
- Custom cursors.
- Continuous ambient animation.
- Decorative parallax.
- Animation-gated text.
- Game-like navigation.

When reduced motion is requested, transitions become immediate and diagrams remain fully understandable.
## Resume Selector

The selector is a deliberate transition between two products.

It must show:

- Resume 01 — Classic / macOS.
- Resume 02 — Interactive / Web.
- A representative preview of each.
- One-sentence audience and purpose descriptions.
- Clear keyboard focus and Escape behavior.

The macOS preview resembles the existing Bear window. The web preview resembles the operational dossier and its evidence map.

Selecting Classic opens the current Bear resume. Selecting Interactive opens `/resume`.
## LaTeX Resume

Retain the existing sb2nov-derived template and ATS-friendly structure.

Target:

- Letter paper.
- One or two pages, with two pages expected.
- Readable 10–11 point body text.
- No artificial compression, clipped content, or excessive whitespace.
- Searchable text and valid hyperlinks.

Recommended order:

1. Header.
2. Professional summary.
3. Technical skills.
4. Professional experience.
5. Selected projects or additional engineering highlights.
6. Education and certifications.

Content priorities:

- Multi-courier architecture, 100K+ designed capacity, BullMQ/SQS, retry/DLQ/reprocessing, and settlement.
- Abu Dhabi Police air-gapped delivery.
- Stripe Connect marketplace infrastructure.
- Production AI agents.
- AxonERP application, CI/CD, Kubernetes, and disaster recovery ownership.
- Confirmed 200+ deployment fleet and associated platform technologies.

Remove redundant project descriptions that repeat experience bullets. Remove or correct the unsupported current “WhatsApp Chrome Extension” framing because `career.txt` describes an AI order-creation workflow, not that standalone project.

Compile with `pdflatex` for at least two passes. Copy the final PDF to `portfolio/public/resume.pdf`.
## Content Data Flow

`career.txt` remains the human-authored master record.
For the portfolio, introduce one structured career-data module for shared facts used by:

- Interactive resume components.
- Classic markdown generation or synchronization.
- SEO content.
- Structured data.
- LLM profile files.

Presentation-specific configuration may remain separate, but identity, dates, metrics, roles, links, and claim wording must not be duplicated manually across multiple modules.

Add a lightweight validation script that checks:

- Required roles and dates.
- Required links.
- Metric wording.
- Presence of all requested experience themes.
- Absence of known unsupported phrasing.

## SEO and AI Discoverability

The build must generate a dedicated static `/resume` representation with meaningful HTML content for crawlers while preserving the interactive SPA experience for browsers.

Implement:

- Resume-specific title and description.
- Canonical `https://hamzaghafoor.vercel.app/resume`.
- Person/ProfilePage JSON-LD with accurate identity, role, links, alumni data, and selected work.
- Semantic headings and plain-text career evidence.
- Open Graph and social metadata.
- Updated sitemap entries for `/resume` and `/resume.pdf`.
- Updated `robots.txt` allowing legitimate public crawling while disallowing only genuinely private/admin paths.
- Both `llm.txt` and `llms.txt` if current project compatibility requires both.

The AI profile must concisely state:

- Identity and target role.
- Engineering specialization.
- Employment history.
- Major systems.
- Supported scale.
- Deployment environments.
- Important technologies.
- Public professional links.

Exclude date of birth, phone number, private infrastructure details, secrets, and confidential client implementation data from AI crawler files unless already clearly intended as public professional information.
## Accessibility

Meet the following baseline:

- Semantic landmarks and heading order.
- Skip link.
- Keyboard-operable navigation, selector, accordions, and flow controls.
- Visible focus styles.
- Dialog focus containment and focus restoration.
- Escape closes the selector.
- No information available only on hover.
- Text alternatives for architecture diagrams.
- Sufficient color contrast.
- `prefers-reduced-motion` support.
- Touch targets appropriate for mobile.

## Responsive Behavior

Desktop:

- Evidence rail plus main narrative.
- Full architecture map.
- Side-by-side selector previews.

Tablet:

- Compact sticky header.
- Reduced map width and simplified labels.
- Two-column evidence where space allows.

Mobile:

- Single-column reading order.
- Vertical architecture flows.
- Full-width actions.
- Selector previews stacked.
- No horizontal overflow.
- Critical identity, role, and proof visible before decorative elements.

## Error Handling and Resilience

- If animation APIs are unavailable, content remains visible.
- If JavaScript fails, static SEO pages and PDF remain available.
- If the PDF is missing during build, validation fails.
- External links use safe target attributes.
- Route handling supports `/resume` and `/resume/`.
- Closing the interactive resume returns to the desktop without breaking history.

## Testing and Validation

### Content

- Cross-check all claims against `career.txt` and Hamza's explicit confirmations.
- Verify dates, titles, company names, project names, links, and metric qualifiers.
- Confirm all requested experience themes appear.

### LaTeX and PDF

- Run `pdflatex` twice.
- Confirm one or two pages with `pdfinfo`.
- Inspect every rendered page as an image.
- Check clipping, overflow, links, typography, spacing, page breaks, and whitespace.
- Extract PDF text to confirm ATS-readable content.

### Portfolio

- Run the structured content checks.
- Run TypeScript/build validation.
- Run the production Vite build.
- Test both selector paths.
- Test direct `/resume` navigation and browser back behavior.
- Verify the Bear/macOS resume still opens correctly.
- Check desktop, tablet, and mobile viewports.
- Test keyboard-only navigation and reduced motion.
- Check browser console errors.
- Inspect key screenshots.
- Measure production performance and avoid regressions in Core Web Vitals.

### Discoverability

- Inspect generated `robots.txt`, sitemap, `llm.txt`, `llms.txt`, metadata, canonical URLs, JSON-LD, and static `/resume` HTML.
- Confirm all public URLs resolve in the production preview.

## Scope Boundaries

In scope:

- LaTeX source and generated PDF.
- Existing resume selector and previews.
- Existing `/resume` experience.
- Shared resume data and validation.
- Classic resume content synchronization.
- Resume-related SEO and AI discovery.
- Accessibility, responsiveness, and performance work for the resume paths.

Out of scope:

- Redesigning the macOS desktop.
- Replacing unrelated apps.
- Reworking authentication, AI assistant, camera, games, or editor features.
- Adding unsupported career claims.
- Introducing a third resume variant.
- Publishing or deploying without a separate explicit request.

## Acceptance Criteria

The work is complete when:

- Resume 01 retains its macOS/Bear identity and works from all existing entry points.
- Resume 02 is a distinctive recruiter-oriented engineering product at `/resume`.
- Recruiters can identify role, specialization, scale, and contact options immediately.
- All specified professional systems are represented accurately.
- The LaTeX PDF is readable, ATS-friendly, and no more than two pages.
- The PDF is available at `/resume.pdf`.
- Selector, desktop return, deep link, and browser navigation work.
- Resume 02 is responsive, keyboard accessible, reduced-motion aware, and free of console errors.
- Search and AI discovery outputs accurately represent the profile.
- The production build passes.
