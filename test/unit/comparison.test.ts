import assert from 'assert';
import joinDeep from 'join-deep';
import flattenDeep from 'lodash.flattendeep';

describe('join methods', () => {
  it('should treat sparse arrays as dense', () => {
    const array = [[1, 2, 3], Array(3)];
    const expected = [1, 2, 3];
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

  it('should work with empty arrays', () => {
    const array = [[], [[]], [[], [[[]]]]];

    assert.deepEqual(joinDeep(array, ', '), flattenDeep(array).join(', '));
  });

  it('should support flattening of nested arrays', () => {
    const array = [1, [2, [3, [4]], 5]];

    assert.deepEqual(joinDeep(array, ', '), flattenDeep(array).join(', '));
  });

  it('should return an empty array for non array-like objects', () => {
    const nonArray = { 0: 'a' };

    assert.deepEqual(joinDeep(nonArray as unknown as unknown[], ', '), flattenDeep(nonArray).join(', '));
  });
});
