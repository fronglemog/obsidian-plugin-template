// eslint.config.mjs

/* ESLINT */
import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

/* PLUGINS */
import tseslint from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintPluginObsidianmd from 'eslint-plugin-obsidianmd';

export default defineConfig([
  globalIgnores([
    '**/node_modules/',
    '**/build/',
    '_local/**',
    'plugin/**',
    'eslint.config.mjs',
    'esbuild.config.mjs',
    'version-bump.mjs'
  ]),

  // @ts-expect-error
  ...eslintPluginObsidianmd.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      js,
      '@typescript-eslint': tseslint.plugin,
      unicorn: eslintPluginUnicorn,
      obsidianmd: eslintPluginObsidianmd
    },
    extends: [
      'js/recommended',
      '@typescript-eslint/eslint-recommended',
      '@typescript-eslint/recommended',
      // 'unicorn/recommended',
    ],
    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.node,
        ...globals.browser
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions : {
        projectService: true,
      },
    },
    rules: {
      // ESLint
      'no-prototype-builtins' : 'off',
      'no-undef' : 'off',
      'no-unused-vars': 'off',
      'no-var' : 'error',

      // TypeScript ESLint
      '@typescript-eslint/ban-ts-comment' : 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-empty-function' : 'off',
      '@typescript-eslint/no-empty-object-type' : 'off',
      '@typescript-eslint/no-explicit-any' : 'off',
      '@typescript-eslint/no-misused-promises' : 'off',
      '@typescript-eslint/no-namespace' : 'warn',
      '@typescript-eslint/no-redundant-type-constituents' : 'off',
      '@typescript-eslint/no-unsafe-assignment' : 'off',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unused-vars' : 'warn',

      // eslint-plugin-unicorn
      'unicorn/no-array-callback-reference': 'error',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-reduce': 'warn',
      'unicorn/no-array-reverse': 'warn',
      'unicorn/no-array-sort': 'warn',
      'unicorn/no-for-loop': 'warn',
      'unicorn/no-immediate-mutation': 'warn',
      'unicorn/no-instanceof-builtins': 'warn',
      'unicorn/no-magic-array-flat-depth': 'warn',
      'unicorn/no-negated-condition': 'warn',
      'unicorn/no-negation-in-equality-check': 'warn',
      'unicorn/no-static-only-class': 'warn',
      'unicorn/no-unnecessary-array-flat-depth': 'warn',
      'unicorn/prefer-global-this': 'warn',
      'unicorn/prefer-modern-dom-apis': 'warn',
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/prefer-object-from-entries': 'warn',

      // eslint-plugin-obsidianmd
      'obsidianmd/no-static-styles-assignment' : 'warn',
      'obsidianmd/ui/sentence-case' : 'off',
      'obsidianmd/validate-manifest' : 'off',
    },
  },

  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
    plugins: {
      js,
      '@typescript-eslint': tseslint.plugin,
      unicorn: eslintPluginUnicorn,
      obsidianmd: eslintPluginObsidianmd,
      svelte: eslintPluginSvelte,
    },
    extends: [
      '@typescript-eslint/eslint-recommended',
      '@typescript-eslint/recommended',
      // 'unicorn/recommended',
      'svelte/recommended'
    ],
    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.node,
        ...globals.browser
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: tseslint.parser
      }
    },
    rules: {
      // ESLint
      'no-prototype-builtins' : 'off',
      'no-undef' : 'off',
      'no-unused-vars': 'off',
      'no-var' : 'error',

      // TypeScript ESLint
      '@typescript-eslint/ban-ts-comment' : 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-empty-function' : 'off',
      '@typescript-eslint/no-empty-object-type' : 'off',
      '@typescript-eslint/no-explicit-any' : 'off',
      '@typescript-eslint/no-misused-promises' : 'off',
      '@typescript-eslint/no-namespace' : 'warn',
      '@typescript-eslint/no-redundant-type-constituents' : 'off',
      '@typescript-eslint/no-unsafe-assignment' : 'off',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unused-vars' : 'warn',

      // eslint-plugin-unicorn
      'unicorn/no-array-callback-reference': 'error',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-reduce': 'warn',
      'unicorn/no-array-reverse': 'warn',
      'unicorn/no-array-sort': 'warn',
      'unicorn/no-for-loop': 'warn',
      'unicorn/no-immediate-mutation': 'warn',
      'unicorn/no-instanceof-builtins': 'warn',
      'unicorn/no-magic-array-flat-depth': 'warn',
      'unicorn/no-negated-condition': 'warn',
      'unicorn/no-negation-in-equality-check': 'warn',
      'unicorn/no-static-only-class': 'warn',
      'unicorn/no-unnecessary-array-flat-depth': 'warn',
      'unicorn/prefer-global-this': 'warn',
      'unicorn/prefer-modern-dom-apis': 'warn',
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/prefer-object-from-entries': 'warn',

      // eslint-plugin-obsidianmd
      'obsidianmd/no-static-styles-assignment' : 'warn',
      'obsidianmd/ui/sentence-case' : 'off',
      'obsidianmd/validate-manifest' : 'off',

      // eslint-plugin-svelte

    }
  }
]);
