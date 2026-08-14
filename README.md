# Muhammad Haris — AI Engineer Portfolio

Personal portfolio website showcasing AI/ML projects, skills, and experience in Generative AI, RAG, Agentic AI, and Python development.

**Live site:** [muhammad-haris.vercel.app](https://muhammad-haris.vercel.app) *(update after deployment)*

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- React Three Fiber (3D hero visual)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/   # UI sections (Hero, Projects, Contact, etc.)
├── data/         # Portfolio content (projects, skills, personal info)
├── hooks/        # Custom React hooks
└── lib/          # Utilities
public/
├── images/       # Project screenshots
├── resume.pdf    # Downloadable resume
└── og-image.png  # Social share preview image
```

## Configuration

Copy `.env.example` to `.env` for optional features:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | Optional. Enables contact form email delivery via [Web3Forms](https://web3forms.com). Without it, the form opens the user's email client. |

On Vercel, add environment variables under **Project Settings → Environment Variables**.

## Updating Content

Edit data files — no component changes needed:

- **Personal info & links:** `src/data/personal.ts`
- **Projects:** `src/data/projects.ts`
- **Skills:** `src/data/skills.ts`
- **Journey timeline:** `src/data/journey.ts`

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Use default settings:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy

After deployment, update these URLs if your Vercel domain differs:
- `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image`
- `public/robots.txt` — sitemap URL
- `public/sitemap.xml` — site URL

## Author

**Muhammad Haris** — AI Engineer & Generative AI Developer  
Islamabad, Pakistan

- [GitHub](https://github.com/muhammad-haris2)
- [LinkedIn](https://linkedin.com/in/muhammad-haris-455166294)
- [Email](mailto:haris101gbb@gmail.com)
