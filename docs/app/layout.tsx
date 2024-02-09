import { RootProvider } from "fumadocs-ui/provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "~/app/global.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://timeit.jumr.dev"),
  title: {
    default: "Time Reporting App",
    template: "%s - Time Reporting App",
  },
  description:
    "An app for indie contractors to track time and generate invoices.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-1e6x16.png",
    apple: "/apple-touch-icon.png",
  },
} satisfies Metadata;

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
} satisfies Viewport;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={[
          "min-h-screen font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
        ].join(" ")}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
