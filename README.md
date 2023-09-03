# Next.js Template

PNPM
React + Typescript
Tailwind CSS + shadcn-ui

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Build

```bash
# Create Next.js project
npx create-next-app@latest

# Add prisma
pnpm add prisma --save-dev
npx prisma init --datasource-provider mongodb
# This command introspects our database and writes the inferred schema into your prisma/schema.prisma file
npx prisma db pull
# Push changes in your prisma/schema.prisma file to database
npx prisma db push
# Prisma built-in GUI
npx prisma studio
# Add prisma client
pnpm add @prisma/client
npx prisma generate

# next-themes
pnpm add next-themes

# shadcn-ui
pnpm dlx shadcn-ui@latest init

# Lucide React
pnpm install lucide-react

```

## Getting Started

First, run the development server, then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```bash
pnpm dev
```

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
