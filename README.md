# betterer-config [![CircleCI](https://circleci.com/gh/shelfio/betterer-config/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/betterer-config/tree/master)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> betterer-config description

## Install

```
$ yarn add @shelf/betterer-config
```

## Usage
Inside `.betterer.ts`:

```ts
import frontendConfig  from '@shelf/betterer-config/frontend.js';

const sourceCodePatters = [
  'imports/**/*.{js,jsx,ts,tsx}',
  'client/**/*.{js,jsx,ts,tsx}',
  'server/**/*.{js,jsx,ts,tsx}',
  'packages/**/*.{js,jsx,ts,tsx}',
];

const tsFilesPattern = [
  'imports/**/*.{ts,tsx}',
  'client/**/*.{ts,tsx}',
  'server/**/*.{ts,tsx}',
  'packages/**/*.{ts,tsx}',
];

const config = frontendConfig({
  jsFilesPattern: sourceCodePatters,
  todoFilesPattern: sourceCodePatters,
  tsFilesPattern,
  tsConfigPath: 'tsconfig.json',
  eslintRules: {'no-debugger': 'error'},
  eslintFilesPatterns: sourceCodePatters,
});

export default config;
```

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
