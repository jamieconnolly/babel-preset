'use strict';

const path = require('path');
const pkg = require(path.resolve('./package.json'));
const semver = require('semver');
const versions = require('./versions.json');

const presetEnv = require.resolve('babel-preset-env');
const presetStage3 = require.resolve('babel-preset-stage-3');

module.exports = (context, options) => {
  options = options || {};

  let debug = options.debug || false;
  let modules = options.modules || false;
  let targets = {};

  if (pkg.browserslist) {
    targets.browsers = pkg.browserslist;
  }

  if (pkg.engines && pkg.engines.node) {
    const version = pkg.engines.node;

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
