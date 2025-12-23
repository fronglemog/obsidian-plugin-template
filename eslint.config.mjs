// eslint.config.mjs

/* ESLINT */
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";

/* PLUGINS */
import tseslint from "typescript-eslint";
import obsidianmd from 'eslint-plugin-obsidianmd';
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  obsidianmd.

  globalIgnores([
    "**/node_modules/",
    "eslint.config.mjs",
    "**/main.js"
  ]),

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      importPlugin,
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
    },

    rules: {
      // ESLint
      "no-undef" : "warn",
      "no-unused-vars": "off",
      "no-var" : "error",
      "no-prototype-builtins": "off",

      // TypeScript ESLint
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
]);
