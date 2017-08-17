'use strict';

const path = require('path');
const semver = require('semver');

const presetEnv = require.resolve('babel-preset-env');
const presetStage3 = require.resolve('babel-preset-stage-3');

module.exports = (context, options) => {
  options = options || {};

  const env = process.env.BABEL_ENV || process.env.NODE_ENV;
  const pkg = require(path.resolve('./package.json'));

  const debug = options.debug || false;
  const modules = options.modules || env === 'test' ? 'commonjs' : false;
  const targets = {};

  if (pkg.browserslist) {
    targets.browsers = pkg.browserslist;
  }

  if (pkg.engines && pkg.engines.node) {
    const version = pkg.engines.node;
    const versions = require('./versions.json');

    if (semver.valid(version)) {
      targets.node = version;
    } else if (semver.validRange(version)) {
      targets.node = semver.minSatisfying(versions.node, version);
    }
  }

  return {
    presets: [
      [presetEnv, {debug, modules, targets}],
      presetStage3,
    ],
  };
};
