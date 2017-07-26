'use strict';

var isPlainObj = require('is-plain-obj');

it('test basic properties of config', function() {
  var config = require('../index.js');

  expect(isPlainObj(config)).toBe(true);
});
