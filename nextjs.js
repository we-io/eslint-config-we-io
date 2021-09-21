module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  // ignore configs in other directories
  root: true,
  globals: {
    React: 'writable',
  },
  rules: {
    'require-default-props': 'off',
    'linebreak-style': ['off'],
    indent: 0,
    'react/jsx-indent': 0,
    '@typescript-eslint/indent': ['error', 2],
    'max-len': [2, 120],
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  },
};
