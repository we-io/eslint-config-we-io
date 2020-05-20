/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript/base',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
  ],
  env: {
    'node': true,
  },
  rules: {
    'linebreak-style': [
      'off',
    ],
    'indent': 0,
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    'max-len': [
      2,
      100,
    ],
  },
};
