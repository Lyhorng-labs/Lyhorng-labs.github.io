# My Portfolio

My personal portfolio site. It shows who I am, the projects I've built, and how to reach me.

I am Lyhorng Heng, a Computer Science and Mathematics student. I built this to have one place to point people to instead of sending scattered links.

**Live site:** https://lyhorngheng.com

## Built with

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Motion for the scroll animations

## Running it locally

You'll need Node.js installed. Then:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## How it's set up

- `app/page.tsx` — home page
- `app/projects` — the projects list and the individual project pages
- `app/about`, `app/contact` — about and contact pages
- `app/data/projects.ts` — where all my project info lives, so I just edit this file to add a new one
- `app/components` — reusable pieces like the navbar, footer, and project card

## Deploying

The site is a static export (`output: 'export'` in `next.config.ts`), hosted on Cloudflare Pages. Build command is `npx next build` and the output folder is `out`.
