import assert from 'assert';

// @ts-ignore
import joinDeep from 'join-deep';

describe('join methods', () => {
  it('should treat sparse arrays as dense', () => {
    const array = [[1, 2, 3], Array(3)];
    const expected = [1, 2, 3];
    expected.push(undefined, undefined, undefined);

    const _r = expected.join(', ');
    assert.deepEqual(joinDeep(array, ', '), expected.join(', '));
  });

  it('should work with extremely large arrays', () => {
    const expected = Array(5e5).join(', ');

    try {
      assert.deepEqual(joinDeep<string>([expected], ', '), expected);
    } catch (e) {
      assert.ok(false, e.message);
    }
  });

  it('should work with empty arrays', () => {
    const array = [[], [[]], [[], [[[]]]]];

    assert.deepEqual(joinDeep(array, ', '), '');
  });

  it('should support flattening of nested arrays', () => {
    const array = [1, [2, [3, [4]], 5]];

    assert.deepEqual(joinDeep<number>(array, ', '), '1, 2, 3, 4, 5');
  });

  it('should return an empty array for non array-like objects', () => {
    const nonArray = { 0: 'a' };

    assert.deepEqual(joinDeep<unknown>(nonArray as unknown as unknown[], ', '), '');
  });
});
