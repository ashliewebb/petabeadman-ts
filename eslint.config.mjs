import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // 👇 Add your ignores here
    ignores: [
      'src/lib/prismic/*.tsx',    // ignore problematic file
      'src/.slicemachine/**',         // ignore Slice Machine generated content
      '**/*.d.ts',                    // optionally ignore all type defs
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
