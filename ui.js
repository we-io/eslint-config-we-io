/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  extends: [
    'plugin:jest/recommended',
    'airbnb-typescript',
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'react',
    'jest',
  ],
  rules: {
    'linebreak-style': [
      'off',
    ],
    'indent': 0,
    'react/jsx-indent': 0,
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    'max-len': [
      2,
      120,
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'peerDependencies': true,
        'devDependencies': [
          'mocks/**/*',
          'src/stories/**',
          'src/setupTests.ts',
          '__tests__/**/*',
          'jest/**/*',
          '**/**/*.story.tsx',
        ],
      },
    ],
    'import/prefer-default-export': 1,
    'import/no-cycle': [
      1,
      {
        'maxDepth': 7,
      },
    ],
    'react/jsx-props-no-spreading': 1,
    'consistent-return': 1,
    'react/prop-types': 0,
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
  globals: {
    'window': true,
    'jest/globals': true,
  },
};
