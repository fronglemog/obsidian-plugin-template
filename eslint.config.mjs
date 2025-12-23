// eslint.config.mjs

/* ESLINT */
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";

/* PLUGINS */
import tseslint from "typescript-eslint";
import obsidianmd from 'eslint-plugin-obsidianmd';

export default defineConfig([
  globalIgnores([
    "**/node_modules/",
    "eslint.config.mjs",
    "esbuild.config.mjs",
    "**/main.js"
  ]),

  js.configs.recommended,
  tseslint.configs.recommended,
  ...obsidianmd.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      '@typescript-eslint' : tseslint.plugin
    },
    extends: [
      "js/recommended",
      "@typescript-eslint/eslint-recommended",
      "@typescript-eslint/recommended"
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions : {
        projectService: true
      }
    },

    rules: {
      // ESLint
      "no-undef" : "warn",
      "no-unused-vars": "off",
      "no-var" : "error",
      "no-prototype-builtins" : "off",

      // TypeScript ESLint
      "@typescript-eslint/no-unused-vars" : "warn",
      "@typescript-eslint/no-empty-function" : "off",
      "@typescript-eslint/ban-ts-comment" : "off",

      // Obsidianmd
      "obsidianmd/validate-manifest" : "off"
    },
  },
]);
