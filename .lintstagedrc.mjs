export default {
  "*.{js,ts,jsx,tsx,json,css,md,yml}": "prettier --write",
  "apps/docs/**/*.{js,ts,jsx,tsx}": [() => "pnpm --filter docs lint"],
  "apps/web/**/*.{js,ts,jsx,tsx}": [() => "pnpm --filter web lint"],
  "packages/ui/**/*.{js,ts,jsx,tsx}": [() => "pnpm --filter ui lint"],
};
