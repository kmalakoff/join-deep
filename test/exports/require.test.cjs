const assert = require('assert');
const joinDeep = require('join-deep');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof joinDeep, 'function');
  });
});
