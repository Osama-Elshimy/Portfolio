import { fileURLToPath } from "url";

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-astro").PluginOptions} AstroConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | AstroConfig | TailwindConfig | SortImportsConfig } */
const config = {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  tailwindStylesheet: fileURLToPath(
    new URL("./src/styles/global.css", import.meta.url),
  ),
  tailwindFunctions: ["cn", "cva"],
  importOrder: [
    "<TYPES>",
    "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "<TYPES>^[.|..|@/]",
    "^@/layouts",
    "^@/",
    "^[../]",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.json.hbs",
      options: {
        parser: "json",
      },
    },
    {
      files: "*.js.hbs",
      options: {
        parser: "babel",
      },
    },
  ],
};

export default config;
