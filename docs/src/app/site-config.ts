export const siteConfig = {
  name: "Acme Corp Lib",
  description:
    "The perfect starter template for your next TypeScript library. Batteries included powered by PNPM Workspaces, Turborepo, tsup & Changesets.",
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/introduction",
    },
  ],
  sidebarNav: [
    {
      title: "Monorepo Setup",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Release",
          href: "/docs/release",
          items: [],
        },
      ],
    },
    {
      title: "Prisma Generator",
      items: [
        {
          title: "Generator",
          href: "/docs/generator",
          items: [],
        },
        {
          title: "Eslint Plugin",
          href: "/docs/eslint",
          items: [],
        },
      ],
    },
  ],
  links: {
    twitter: "https://twitter.com/jullerino",
    github: "https://github.com/juliusmarminge/acme-corp-lib",
    docs: "/docs",
  },
};

export type SiteConfig = typeof siteConfig;
