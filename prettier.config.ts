import { Config } from "prettier";

const config: Config = {
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 150,
  tabWidth: 2,
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
