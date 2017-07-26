'use strict';

var babel = require('babel-core');

it('load preset in babel to validate syntax', function() {
  var data = babel.transform('let b = 1; a ** b;', {
    babelrc: false,
    filename: 'valid.js',
    presets: ['./index.js'],
  });

  expect(data).toBeTruthy();
  expect(data.ast).toBeTruthy();
  expect(data.code).toBeTruthy();
  expect(data.map).toBeNull();
});
