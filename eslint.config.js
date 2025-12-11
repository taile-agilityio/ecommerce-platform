import { nextJsConfig } from "@repo/eslint-config/next-js";

export default [
  ...nextJsConfig,
  {
    files: ["apps/web/**/*.{ts,tsx}", "apps/docs/**/*.{ts,tsx}"],
  },
];
