# Edufy Tech — Product Requirements Document (PRD)

**Product:** Edufy Tech — Technology Solutions + EdTech corporate website
**Type:** Course & internship provider (marketing + lead-gen + catalog)
**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Neon Postgres (`@neondatabase/serverless`)
**Status:** v1

---

## 1. Overview & Goals

Edufy Tech is a technology education company that offers **online courses** and **internship
programs**, and positions itself as a technology solutions partner. The website's job is to:

1. Establish **credibility and trust** (outcomes, ratings, testimonials, company info).
2. Present a **searchable catalog** of courses and internships driven by a database.
3. **Convert visitors** into leads via enrollment, internship application, and contact forms.
4. Persist all submissions to **Neon Postgres** for follow-up.

### Success Metrics
- Visitors can browse all courses/internships and view details.
- Enrollment / application / contact submissions are stored in the database.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95.
- Fully responsive (375 → 1440px).

---

## 2. Users & Personas

| Persona | Goal |
|---------|------|
| **Learner / Student** | Find a course, understand syllabus & price, enroll. |
| **Intern candidate** | Find an internship matching skills, apply. |
| **Employer / Partner** | Understand services, contact the company. |
| **Admin (internal)** | Read enrollments/applications/leads from the DB. |

---

## 3. Information Architecture (Pages) — aligned to kickoff brief

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Home: hero, trust stats, path selection, programs, services, career-paths teaser, testimonials, Partners/Approvals rows, CTA. | Built |
| `/programs` | Program grid (AI/ML, Data Science, Cybersecurity, HR) with category filter. | Built |
| `/programs/[slug]` | Curriculum, 6 projects, mentor bios, tools, pricing block, Register CTA. | Built |
| `/register` | Register Interest: form + program select + discount code. **No live charge at launch.** | Built |
| `/success-stories` | Filterable cards with names + LinkedIn links. | Built |
| `/career-paths` | Per-domain roles, industries, progression. | Built |
| `/partners` | For Colleges & Companies: value prop, past collaborations, inquiry form (separate inbox). | Built |
| `/about` | Company story, mission, values, stats. | Built |
| `/contact` | Contact form + company details. | Built |
| `/aira` | AIRA Portal — static "Coming Soon". | Built |
| `/employee` | Employee Portal — static "Coming Soon". | Built |
| `/login` | Auth UI shell (hosted provider Supabase/Clerk — Phase 2). | Shell |
| `/dashboard` | Authenticated shell: program + profile, **reserved LMS slot**. | Shell |
| `/legal/privacy`, `/legal/terms` | Templated legal pages. | Built |

### Deferred (per Non-Negotiables / Phase 2)
- **Razorpay live payments** — Register Interest captures leads only; live checkout flips on post-launch after sign-off.
- **Hosted auth (Supabase/Clerk)** — login/dashboard are UI shells now.
- **CMS (Sanity/Strapi)** — content currently in Neon; pricing is DB-driven, not hardcoded.
- **LMS embed** — dashboard reserves the slot only.

---

## 4. Functional Requirements

### FR-1 — Navigation & Layout
- Fixed navbar (blur-on-scroll), active states, mobile drawer; global 5-column footer.

### FR-2 — Home Page
- Cinematic hero + dual CTA, trust stat counters, path-selection cards, services, featured programs, career-paths teaser, testimonials, four Partners/Approvals marquee rows, final CTA.

### FR-3 — Programs
- Grid reads from `courses`; client category filter; grid accepts new cards easily.
- Detail: description, curriculum, 6 projects, mentors, tools, outcomes, DB-driven pricing, Register CTA.

### FR-4 — Register Interest
- Form with program select + discount-code field → `POST /api/register-interest` → `register_interest`. No payment taken.

### FR-5 — Success Stories & Career Paths
- Success stories: filterable cards with LinkedIn links from `success_stories`.
- Career paths: per-domain roles, industries, progression from `career_paths`.

### FR-6 — B2B (For Colleges & Companies)
- Value prop + past collaborations + inquiry form → `POST /api/b2b` → `b2b_leads` (separate from student contact).

### FR-7 — Contact & Legal
- Contact form → `POST /api/contact` → `contact_leads`; templated privacy/terms.

### FR-8 — Data Layer
- `src/lib/db.ts` connects to Neon via `DATABASE_URL`; read paths fall back to bundled seed data so the site always renders; write paths report a clear "configure database" message when unset.

---

## 5. Data Model (Neon Postgres — already provisioned)

- **courses** (programs) — slug, title, category, level, duration, price_inr, rating, short_desc, description, syllabus[], tags[], is_featured, projects[], mentors[], tools[], outcomes[].
- **career_paths** — domain, tagline, roles[], industries[], progression[].
- **success_stories** — name, program, domain, outcome, quote, linkedin_url, company, avatar_url.
- **register_interest** — program_slug, full_name, email, phone, discount_code, message, status.
- **b2b_leads** — org_name, org_type, contact_name, email, phone, interest, message.
- **contact_leads** — full_name, email, phone, subject, message.
- **testimonials** — name, role, company, quote, avatar_url, rating.
- **internships / enrollments / applications** — retained from initial schema (unused by current UI).

---

## 6. Non-Functional Requirements

- **Accessibility:** WCAG 2.1 AA+, keyboard nav, focus states, reduced motion.
- **Performance:** Server Components for data fetching, minimal client JS.
- **SEO:** Per-page metadata, semantic HTML, Open Graph tags.
- **Security:** Server-side input validation, parameterized SQL, secrets in `.env.local`.
- **Responsiveness:** 375 / 768 / 1024 / 1440 breakpoints.

---

## 7. Design

Follows `docs/DESIGN_SYSTEM.md` — Enterprise Gateway pattern, Trust & Authority style,
blue/indigo/green palette, Lexend + Source Sans 3 typography.

---

## 8. Out of Scope (v1)

- User accounts / login / dashboards.
- Payment processing (enroll captures a lead only).
- Admin CMS UI (data managed via SQL/Neon console for now).
- Blog / LMS video delivery.

---

## 9. Milestones

1. Design system + PRD ✅
2. Data layer + DB client
3. Layout (navbar/footer) + theme
4. Home page
5. Courses (list + detail + enroll)
6. Internships (list + detail + apply)
7. Services / About / Contact
8. Build & verify
