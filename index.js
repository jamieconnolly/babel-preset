'use strict';

const path = require('path');
const pkg = require(path.resolve('./package.json'));

const presetEnv = require.resolve('babel-preset-env');
const presetStage3 = require.resolve('babel-preset-stage-3');

module.exports = function() {
  const targets = {};

  if (typeof pkg.browserslist === 'object' && pkg.browserslist.length) {
    targets.browsers = pkg.browserslist;
  }

  return {
    presets: [
      [presetEnv, {targets}],
      presetStage3,
    ],
  };
};
