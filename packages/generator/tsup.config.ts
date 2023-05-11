import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
  entryPoints: ["src/bin.ts"],
  format: ["cjs"],
  clean: !opts.watch,
  outDir: "dist",
  target: "es2017",
}));
