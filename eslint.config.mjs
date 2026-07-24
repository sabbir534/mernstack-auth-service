// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // 1. Global ignores (applied to everything below)
  {
    // Added eslint.config.mjs and any other config files you might have
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'eslint.config.mjs',
      '*.config.js',
    ],
  },

  // 2. Linting rules for JS and TS files
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      'no-console': 'off',
      'dot-notation': 'error',
    },
  },
]);
