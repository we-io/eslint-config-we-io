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
    '@typescript-eslint/explicit-function-return-type': 1,
    'no-plusplus': 1,
    'consistent-return': 1,
    'import/no-cycle': [
      1,
      {
        'maxDepth': 5,
      },
    ],
    'import/no-named-as-default': 1,
  },
};
