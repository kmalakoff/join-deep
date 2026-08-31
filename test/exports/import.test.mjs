import assert from 'assert';
import joinDeep from 'join-deep';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof joinDeep, 'function');
  });
});
