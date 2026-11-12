# Muhammad Haris — Engineering Portfolio

An editorial, case-study-led portfolio for Muhammad Haris, a Computer Science student at FAST-NUCES Islamabad working across applied AI, retrieval systems, intelligent agents, machine learning, Python backend development, and software engineering.

**Production:** [portfolio-website-opal-two-53.vercel.app](https://portfolio-website-opal-two-53.vercel.app/)

## Design

The visual system is built around “Editorial Engineering”: warm ivory paper, graphite ink, olive technical notation, copper accents, deliberate typography, and lightweight diagrams. The experience is light by default and uses a single dark section for rhythm. Project content is presented as engineering case studies instead of a generic card grid.

## Stack and requirements

- React 19 and TypeScript
- Vite 8
- Tailwind CSS v4
- Framer Motion for restrained entrance and dialog motion
- Lucide React for interface icons
- Node.js 20.19 or newer
- npm (lockfile included)

No WebGL runtime, CMS, state library, or backend server is required.

## Local setup

```bash
npm ci
npm run dev
```

Common checks:

```bash
npm test
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

```text
src/
├── components/
│   ├── Hero/          # Editorial hero and SVG system schematic
│   ├── Projects/      # Featured studies, project ledger, accessible dialog
│   ├── About/         # Biography and engineering principles
│   ├── Experience/    # Research internship and education
│   ├── Skills/        # Evidence-led technical expertise index
│   ├── Contact/       # Web3Forms contact experience
│   ├── Navbar/        # Responsive navigation and scroll spy
│   ├── Footer/
│   └── ui/            # Shared button, label, and section-heading primitives
├── data/              # Typed portfolio content
├── hooks/             # Navigation scroll spy
└── lib/               # Utilities and contact-form validation/payload helpers
tests/                 # Contact form validation and provider-response checks
public/
├── images/projects/   # Project interface captures
├── resume.pdf         # Downloadable résumé
├── og-image.png       # 1200×630 social sharing image
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Content editing

- Personal details, social links, and résumé path: `src/data/personal.ts`
- Featured and additional projects: `src/data/projects.ts`
- Skills and technology groups: `src/data/skills.ts`
- Internship and education: `src/data/journey.ts`

Project facts should remain grounded in the linked repositories. Do not add metrics, deployments, or professional claims without supporting evidence.

## Contact form / Web3Forms

The contact form preserves the existing Web3Forms integration and sends a JSON `POST` request to `https://api.web3forms.com/submit`.

Create a local `.env` file when testing with a real key:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

The same variable must be configured in the existing Vercel project for Preview and Production environments. Never commit the real key.

Behavior:

- Name, email, and message are validated in the browser.
- A submission is reported as successful only when the HTTP response is OK and Web3Forms returns `success: true`.
- The button is disabled and guarded against duplicate requests while a submission is in flight.
- Without a key, the form prepares a `mailto:` message and clearly labels that fallback; it does not claim delivery.
- Provider failures show the direct email address.

Do not send a real test submission without the portfolio owner’s permission.

## Vercel deployment

The existing GitHub-connected Vercel project should keep these settings:

- Production branch: `main`
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_WEB3FORMS_ACCESS_KEY`

The canonical URL, Open Graph metadata, `robots.txt`, and `sitemap.xml` already use the current production domain. Push a validated redesign branch first, review its preview deployment, and merge into `main` only after approval. Do not create a new Vercel project.

## Resume

`public/resume.pdf` is a one-page PDF dated November 10, 2026 in its file metadata. No newer local résumé was found during the redesign, so the existing file was preserved.
