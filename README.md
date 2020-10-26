# @we.io/eslint-config

ESLint config with the current coding style at we.io GmbH.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-red.svg)](https://conventionalcommits.org)
[![NPM version](https://img.shields.io/npm/v/@we.io/eslint-config)](https://www.npmjs.com/package/@we.io/eslint-config)

## Install

```bash
npm install @we.io/eslint-config --save-dev
```

## Usage

Add a `.eslintrc` file to your project.

#### In general use the base config:

```js
{
    "extends": [
        "@we.io"
    ],
    // ignore configs in other directories
    "root": true
}
```

#### For backend projects use:

```js
{
    "extends": [
        "@we.io", // base
        "@we.io/eslint-config/api"
    ],
    // ignore configs in other directories
    "root": true
}
```

#### For frontend projects use:

```js
{
    "extends": [
        "@we.io", // base
        "@we.io/eslint-config/ui"
    ],
    // ignore configs in other directories
    "root": true
}
```

## Reminder

ESLint is a peerDependency, so you must install it as well

```bash
npm install eslint --save-dev
```
