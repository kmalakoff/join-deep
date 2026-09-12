import assert from 'assert';

import joinDeep from 'join-deep';
import flattenDeep from 'lodash.flattendeep';

describe('join methods', () => {
  it('should treat sparse arrays as dense', () => {
    const array = [[1, 2, 3], Array(3)];
    const expected = [1, 2, 3] as (number | undefined)[];
    expected.push(undefined, undefined, undefined);

    assert.deepEqual(joinDeep(array, ', '), expected.join(', '));
  });

  it('should work with extremely large arrays', () => {
    const expected = Array(5e5).join(', ');

    try {
      assert.deepEqual(joinDeep<string>([expected], ', '), expected);
    } catch (e) {
      assert.ok(false, (e as Error).message);
    }
  });

  it('should work with empty arrays', () => {
    const array = [[], [[]], [[], [[[]]]]];
    const expected = '';

    assert.deepEqual(flattenDeep(array).join(', '), expected);
    assert.deepEqual(joinDeep(array, ', '), expected);
  });

  it('should support flattening of nested arrays', () => {
    const array = [1, [2, [3, [4]], 5]];
    const expected = '1, 2, 3, 4, 5';

    assert.deepEqual(flattenDeep(array).join(', '), expected);
    assert.deepEqual(joinDeep<number>(array, ', '), expected);
  });

  it('should return an empty array for non array-like objects', () => {
    const nonArray = { 0: 'a' };

    assert.deepEqual(joinDeep<unknown>(nonArray as unknown as unknown[], ', '), '');
  });
});
