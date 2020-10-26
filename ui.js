module.exports = {
  extends: [
    "plugin:jest/recommended",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "linebreak-style": ["off"],
    "indent": 0,
    "react/jsx-indent": 0,
    "@typescript-eslint/indent": ["error", 2],
    "max-len": [2, 120],
  },
  globals: {
    "window": true,
    "jest/globals": true,
  },
};
