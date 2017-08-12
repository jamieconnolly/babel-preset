'use strict';

const babel = require('babel-core');
const isPlainObj = require('is-plain-obj');

it('should export an object', function() {
  const config = require('../index')();

  expect(isPlainObj(config)).toBe(true);
  expect(config.presets).toBeTruthy();
});

it('should not contain invalid syntax', function() {
  const result = babel.transform('let b = 1; a ** b;', {
    babelrc: false,
    presets: ['./index.js'],
  });

  expect(result).toBeTruthy();
  expect(result.ast).toBeTruthy();
  expect(result.code).toBeTruthy();
  expect(result.map).toBeNull();
});
