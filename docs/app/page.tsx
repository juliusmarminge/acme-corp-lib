import Link from "next/link";

export default function IndexPage() {
  return (
    <section className="container flex flex-col justify-center overflow-hidden items-center min-h-[calc(100vh-4rem)] gap-6 pb-8 pt-6 md:py-10">
      <div className="max-w-5xl space-y-8">
        <h1
          className="font-cal text-balance animate-fade-up bg-gradient-to-br from-foreground/80 to-muted-foreground bg-clip-text text-center text-5xl/[3rem] font-bold text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          Acme Corp Lib
        </h1>
        <p
          className="animate-fade-up text-balance text-center text-muted-foreground/80 opacity-0 md:text-xl"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          The perfect starter template for your next TypeScript library.
          Batteries included powered by PNPM Workspaces, Turborepo, tsup &
          Changesets.
        </p>
        <div
          className="flex justify-center gap-4 animate-fade-up opacity-0"
          style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
        >
          <Link href="/docs">Documentation</Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/juliusmarminge/acme-corp-lib"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
