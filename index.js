'use strict';

const presetEnv = require.resolve('babel-preset-env');
const presetStage3 = require.resolve('babel-preset-stage-3');

module.exports = function() {
  return {
    presets: [
      presetEnv,
      presetStage3,
    ],
  };
};
