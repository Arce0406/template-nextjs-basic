# Next.js Template

A [Next.js](https://nextjs.org/) 13 template that contains/uses the following features and modules:
<br/>
一個 [Next.js](https://nextjs.org/) 13 的模板，包含/使用了以下功能與模組：
<br/>
[Next.js](https://nextjs.org/)13テンプレートには、次の機能とモジュールが含まれています：

- package manager：pnpm
- web framework：Next.js 13
  - Using：app router、src folder structure
  - Using：TypeScript
  - Using：React
  - Using：Tailwind CSS
- The ui library：[shadcn-ui](https://ui.shadcn.com/).
- Themes management：[next-themes](https://www.npmjs.com/package/next-themes)
- Database orm using [prisma](https://www.prisma.io/)
- Icons：[lucide-react](https://lucide.dev/guide/packages/lucide-react)
- Authorize：[Next-Auth](https://next-auth.js.org/)
- i18n：[next-intl](https://next-intl-docs.vercel.app/)

## Commands

### Create Next.js project

```bash
npx create-next-app@latest
```

### Prisma

```bash
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
```

### Others

```bash
# next-themes
pnpm add next-themes

# shadcn-ui
pnpm dlx shadcn-ui@latest init

# Lucide React
pnpm install lucide-react

# next-intl
# https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components
pnpm add next-intl@3.0.0-beta.15
```

### Getting Started

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
