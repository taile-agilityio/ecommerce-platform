import { config } from "@repo/jest-config/react-internal";

export default {
  ...config,
  coveragePathIgnorePatterns: [
    ...(config.coveragePathIgnorePatterns || []),
    "src/index.ts",
  ],
};
