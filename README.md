# @we.io/eslint-config

Eslint config for my current preferences including prettier and SonarJS

## Install

```bash
npm install @we.io/eslint-config --save-dev
```

## Usage

Add a `.eslintrc` file to your project

```json
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

