var assert = require('assert');
var flattenDeep = require('lodash.flattendeep');

var joinDeep = require('../..');

describe('join methods', function () {
  it('should treat sparse arrays as dense', function () {
    var array = [[1, 2, 3], Array(3)];
    var expected = [1, 2, 3];
    expected.push(undefined, undefined, undefined);

    assert.deepEqual(joinDeep(array, ', '), expected.join(', '));
  });

  // it('should work with extremely large arrays', function () {
  //   var array = [Array(5e5)];

  //   try {
  //     assert.deepEqual(joinDeep(array), flattenDeep(array).join(', '));
  //   } catch (e) {
  //     assert.ok(false, e.message);
  //   }
  // });

  it('should work with empty arrays', function () {
    var array = [[], [[]], [[], [[[]]]]];

    assert.deepEqual(joinDeep(array, ', '), flattenDeep(array).join(', '));
  });

  it('should support flattening of nested arrays', function () {
    var array = [1, [2, [3, [4]], 5]];

    assert.deepEqual(joinDeep(array, ', '), flattenDeep(array).join(', '));
  });

  it('should return an empty array for non array-like objects', function () {
    var nonArray = { 0: 'a' };

    assert.deepEqual(joinDeep(nonArray, ', '), flattenDeep(nonArray).join(', '));
  });
});
