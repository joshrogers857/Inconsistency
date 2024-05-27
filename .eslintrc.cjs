/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  plugins: [
    '@stylistic',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/comma-dangle': [2, 'always-multiline'],
    '@stylistic/eol-last': ["error", "always"],
    '@stylistic/no-trailing-spaces': "error",
    '@stylistic/no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 0 }],
  },
};
