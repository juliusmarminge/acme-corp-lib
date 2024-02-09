import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { pageTree } from "../source";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={pageTree} nav={{ title: "My App" }}>
      {children}
    </DocsLayout>
  );
}
