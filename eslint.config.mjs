// eslint.config.mjs

/* ESLINT */
import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

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
        createEl,
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
      "@typescript-eslint/no-unsafe-assignment" : "off",
      "@typescript-eslint/no-explicit-any" : "off",
      "@typescript-eslint/no-empty-object-type" : "warn",
      "@typescript-eslint/no-redundant-type-constituents" : "off",
      "@typescript-eslint/no-misused-promises" : "off",

      // Obsidianmd
      "obsidianmd/validate-manifest" : "off"
    },
  },
]);
