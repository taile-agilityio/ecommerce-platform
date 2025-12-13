/** @type {import('jest').Config} */
export const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.mjs"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/path/to/dir/",
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
    ".module.ts",
    ".mock.ts",
    "^.*\\.stories\\.[jt]sx?$",
  ],
};
