# @we.io/eslint-config
ESLint config with the current coding style at we.io GmbH.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-red.svg)](https://conventionalcommits.org)
[![NPM version](https://img.shields.io/npm/v/@we.io/eslint-config)](https://www.npmjs.com/package/@we.io/eslint-config)

## Install

```bash
npm install @we.io/eslint-config --save-dev
```

## Usage

Add a `.eslintrc` file to your project

```js
{
    "extends": [
        "@we.io"
    ],
    "env": {
        "node": true
    },
    // ignore configs in other directories
    "root": true
}
```

## Reminder

ESLint is a peerDependency, so you must install it as well

```bash
npm install eslint --save-dev
```

