# TypeScript Template

This repository can be used to create projects which uses typescript. This project has Documentation([TypeDoc](https://typedoc.org)), Automated Versioning([Semantic Versioning](https://semver.org/)), Unit Testing([Jest](https://jestjs.io)), TypeScript Linting([TSLint](https://palantir.github.io/tslint/)) builtin.

For the sake of example say we want to build a library to take man to moon. Let's name it `man-to-moon` and replace it with the repository you want to create. Below examples uses this keyword and will demonstrate how to use the template library.

# Prerequisites

[WIKI](https://github.com/GrexIt/type-script-template/blob/master/wiki/stuff_to_read.md)

# Setup

Edit package.json:

- name to `@hiver/man-to-moon`.
- version to `0.0.1`
- add a description
- change repository: url
- change bugs: url
- change homepage to docs url mentioned below

```shell
npm install
```

# How to use Man-To-Moon

```shell
npm install @hiver/man-to-moon
```

In Codebase

```ts
import ManToMoon from '@hiver/man-to-moon';
import { Chandrayaan } from '@hiver/man-to-moon';
```

# Docs

We have to set this up by going to settings of the github and enabling Github pages for this repository. (Select master/docs option to create this link.)

https://grexit.github.io/type-script-template/

# Local Development

## To compile the code

```shell
npm run localw
```

localw runs webpack in watch mode.

## To see the result

```shell
npm run serve
```

# Testing

```shell
npm run test
```

## In Watch mode

```shell
npm run watch
```

# Releasing a version

This creates a tag in github repository and which can be used to create a release.

```shell
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
```

## Publishing to the npmjs.com

```shell
npm publish
```

## To see the published package

[Npm Package List](https://www.npmjs.com/settings/hiver/packages)

# Contributing (Enhancing TypeScript Template)

```shell
git clone git@github.com:GrexIt/type-script-template.git && npm install
```

- Use Visual Studio Code editor
- Install Tslint
