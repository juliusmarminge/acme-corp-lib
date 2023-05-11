import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  () => `https://acme-corp-lib.vercel.app/docs/eslint`
);

const ALLOWED_IMPORTS = ["Prisma", "PrismaClient"];

export default createRule({
  name: "restrict-imports",
  create(context) {
    return {
      ImportDeclaration(node) {
        node.source.value === "@prisma/client" &&
          node.specifiers.forEach((item) => {
            const nodeName = item.local.name;
            const isTypeImport =
              // @ts-expect-error - importKind is not in the types
              item.importKind === "type" || item.parent?.importKind === "type";
            if (ALLOWED_IMPORTS.includes(nodeName) || isTypeImport) return null;

            return context.report({
              node: item,
              loc: node.loc,
              messageId: "restrict-imports",
            });
          });
      },
    };
  },
  meta: {
    docs: {
      description: "Restrict imports of runtime objects from `@prisma/client`",
      recommended: "error",
    },
    messages: {
      "restrict-imports":
        "Runtime enums should be imported from a separate entrypoint.",
    },
    type: "suggestion",
    schema: [],
  },
  defaultOptions: [],
});
