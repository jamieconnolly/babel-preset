# babel-preset

[![Build Status][build-status-image]][build-status-url]
[![Dependency status][dependency-status-image]][dependency-status-url]
[![MIT License][license-image]][license-url]
[![Version][version-image]][version-url]

> My own opinionated Babel preset.

## Installation

```
$ npm install --save-dev @jamieconnolly/babel-preset
```

## Usage

To get started, add this to your `.babelrc` file:

```json
{
  "presets": ["@jamieconnolly/babel-preset"]
}
```

## Options

For more information on setting options for a preset, refer to the [plugin/preset options](https://babeljs.io/docs/plugins/#plugin-preset-options) documentation.

### `debug`

`boolean`, defaults to `false`.

Outputs the targets/plugins used and the version specified in [plugin data version](https://github.com/babel/babel-preset-env/blob/master/data/plugins.json) to `console.log`.

### `modules`

`"amd" | "umd" | "systemjs" | "commonjs" | false`, defaults to `false`.

Enable transformation of ES6 module syntax to another module type.

Setting this to `false` will not transform modules.

## License

[MIT License][license-url]

[build-status-image]: https://api.travis-ci.org/jamieconnolly/babel-preset.svg?branch=master
[build-status-url]: https://travis-ci.org/jamieconnolly/babel-preset

[dependency-status-image]: https://david-dm.org/jamieconnolly/babel-preset/master.svg
[dependency-status-url]: https://david-dm.org/jamieconnolly/babel-preset

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/jamieconnolly/babel-preset/blob/master/LICENSE

[version-image]: https://img.shields.io/npm/v/@jamieconnolly/babel-preset.svg
[version-url]: https://www.npmjs.com/package/@jamieconnolly/babel-preset
