# MDA — FOOTBALL ANALYSIS

A production-grade full-stack football analysis platform built with **Next.js 14 App Router**, **TypeScript**, **Prisma**, **PostgreSQL**, and **NextAuth**.

This project delivers an RTL-first Arabic dark interface, football domain data models, secure authentication, REST APIs, and reusable UI components aligned to the MDA brand identity.

---

## Project Overview

MDA — Football Analysis combines:

- Tactical football analysis
- Data-driven indicators
- Visual content presentation
- Arabic-first RTL UX

The platform includes a public content experience (home, teams, players, matches, analyses) and protected video access.

---

## Tech Stack

### Front-End
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- RTL Arabic UI (dark theme)

### Back-End
- Next.js Route Handlers (REST)
- TypeScript

### Data Layer
- PostgreSQL
- Prisma ORM

### Authentication
- NextAuth (Credentials provider: email + password)
- JWT sessions
- Role-based access (`user`, `admin`)

### Deployment Target
- Vercel-compatible

---

## Branding & UI

Core palette:

- `#0D2A1F` — Background (Deep Green)
- `#1A2F25` — Card surface
- `#4CAF50` — Primary accent
- `#81C784` — Secondary accent
- `#FFFFFF` — Primary text
- `#D9C7A3` — Secondary text

Layout:
- Global Navbar
- Centered content (`max-width: 1200px`)
- Global Footer
- Full RTL rendering (`dir="rtl"`)

---

## Features

- ✅ Next.js 14 App Router architecture
- ✅ Prisma models for football analytics entities
- ✅ NextAuth credentials login with bcrypt validation
- ✅ JWT session-based auth
- ✅ RBAC enforcement for analysis write operations (admin only)
- ✅ REST APIs with unified response format and try/catch error handling
- ✅ Zod validation for POST/PUT payloads
- ✅ Loading skeletons and empty states in data pages/components
- ✅ SEO metadata + OpenGraph on key pages
- ✅ Revalidation-ready data fetching (`revalidate: 60`)

---

## Folder Structure

```text
.
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── analyses/
│   │   │   │   ├── [id]/route.ts
│   │   │   │   └── route.ts
│   │   │   ├── auth/[...nextauth]/route.ts
│   │   │   ├── matches/route.ts
│   │   │   ├── mini-dashboard/route.ts
│   │   │   ├── players/route.ts
│   │   │   ├── teams/route.ts
│   │   │   └── videos/route.ts
│   │   ├── analyses/
│   │   ├── auth/signin/
│   │   ├── matches/
│   │   ├── players/
│   │   ├── teams/
│   │   ├── videos/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── icons/
│   │   ├── layout/
│   │   └── ui/
│   └── lib/
│       ├── validation/schemas.ts
│       ├── api-response.ts
│       ├── auth.ts
│       ├── prisma.ts
│       ├── server-fetch.ts
│       └── types.ts
├── .env.example
├── tailwind.config.ts
└── package.json
```

---

## Database Schema Summary

Prisma models:

- `User`: authentication users and roles
- `Team`: clubs/teams
- `Player`: player profile and stats
- `Match`: fixture results and xG metrics
- `Analysis`: long-form tactical analysis content
- `SocialStat`: social metrics by week
- `HighlightNumber`: featured KPI values
- `Video`: video catalog entries (platform, URL, thumbnail)

Run migrations after setting `DATABASE_URL`.

---

## API Endpoints Summary

All endpoints return:

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

On failure:

```json
{
  "success": false,
  "data": null,
  "error": "Error message"
}
```

### Public Reads
- `GET /api/mini-dashboard`
- `GET /api/teams`
- `GET /api/players`
- `GET /api/matches`
- `GET /api/analyses`
- `GET /api/videos`

### Writes with Validation
- `POST /api/teams`
- `POST /api/players`
- `POST /api/matches`
- `POST /api/analyses` (admin only)
- `PUT /api/analyses/:id` (admin only)
- `DELETE /api/analyses/:id` (admin only)

Validation is implemented with Zod in `src/lib/validation/schemas.ts`.

---

## Authentication Flow

1. User visits `/auth/signin`
2. Credentials are submitted (`email`, `password`)
3. NextAuth Credentials provider validates input and checks password hash with bcrypt
4. JWT session is issued upon success
5. Protected routes/pages can enforce session checks (`getServerSession`)
6. RBAC uses `session.user.role` (`user` or `admin`)

---

## Environment Variables

Create `.env` based on `.env.example`:

```bash
DATABASE_URL="postgres://..."
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
NODE_ENV="development"
```

---

## Installation

```bash
npm install
npx prisma migrate dev
npx prisma generate
npm run dev
```

Open: `http://localhost:3000`

---

## Development Commands

```bash
npm run dev            # Run dev server
npm run build          # Production build
npm run start          # Start production server
npm run lint           # Lint project
npm run prisma:generate
```

---

## Deployment (Vercel)

1. Push repository to GitHub/GitLab/Bitbucket.
2. Import project into Vercel.
3. Configure environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (production URL)
4. Ensure your PostgreSQL instance is reachable from Vercel.
5. Deploy.

Recommended: run Prisma migrations in CI/CD or as part of your deployment pipeline.

---

## Contribution Guidelines

1. Fork and create a feature branch.
2. Follow TypeScript strict typing and existing folder structure.
3. Keep API responses in the unified shape (`success`, `data`, `error`).
4. Add/adjust Zod validation for new write endpoints.
5. Run lint/build checks before opening PR.
6. Open a PR with a clear summary and testing notes.

---

## License

This project currently uses a **License placeholder**. Replace with your preferred license (e.g. MIT) before public release.
