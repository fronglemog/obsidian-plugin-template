// eslint.config.mjs

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,

  globalIgnores([
    "**/node_modules/",
    "**/main.js"
  ]),

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      importPlugin,
      js,
      tseslint
    },
    extends: [
      "js/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "no-undef" : "warn",
      "no-unused-vars": "off",
      "no-var" : "error",
      "no-prototype-builtins": "off",

      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
]);
