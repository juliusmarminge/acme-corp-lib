import restrictImports from "./rules/prisma-imports";

const recommended = {
  plugins: ["@prisma-enums"],
  rules: {
    [`@prisma-enums/restrict-imports`]: "error",
  },
};

export const rules = {
  "restrict-imports": restrictImports,
};

export const configs = { recommended };
