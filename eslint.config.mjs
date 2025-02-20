import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "off", // Desactiva la regla no-unused-vars
      "@typescript-eslint/no-unused-vars": "off", // Desactiva la regla no-unused-vars para TypeScript
    },
  },
];

export default eslintConfig;
