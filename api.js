/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  extends: [
    'plugin:mocha/recommended',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'mocha',
  ],
  env: {
    'node': true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        'peerDependencies': true,
        'devDependencies': [
          'mocks/**/*',
          'src/mongoDb/seed/**',
          'src/setupTests.ts',
          'test/**/*',
          'scripts/**/*',
          'test-setup/**/*',
        ],
      },
    ],
    'mocha/no-mocha-arrows': 'off',
  },
  overrides: [
    {
      'files': ['test/**/*.ts'],
      'rules': {
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
  ],
};
