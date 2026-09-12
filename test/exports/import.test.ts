import assert from 'assert';
import joinDeep from 'join-deep';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof joinDeep, 'function');
  });
});
