/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:jest/recommended',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'jest',
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
    'import/no-extraneous-dependencies': [
      'error',
      {
        'peerDependencies': true,
        'devDependencies': [
          'mocks/**/*',
          'src/mongoDb/seed/**',
          'src/setupTests.ts',
          'test/**/*',
          'jest/**/*',
          'scripts/**/*',
        ],
      },
    ],
    'no-plusplus': 1,
    'consistent-return': 1,
    'import/no-cycle': [
      1,
      {
        'maxDepth': 5,
      },
    ],
    'import/no-named-as-default': 1,
    'jest/consistent-test-it': 2,
    'jest/expect-expect': 2,
    'jest/no-duplicate-hooks': 2,
    'jest/no-export': 2,
    'jest/no-identical-title': 2,
    'jest/no-if': 2,
    'jest/no-jasmine-globals': 2,
    'jest/no-jest-import': 2,
    'jest/no-test-callback': 2,
    'jest/prefer-expect-assertions': 2,
    'jest/prefer-hooks-on-top': 2,
    'jest/prefer-spy-on': 2,
  },
};
