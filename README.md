## join-deep

Deep join an array.

```
var joinDeep = require('join-deep');
var assert = require('assert');

var array1 = [1, [2, [3, [4]], 5]];
assert.deepEqual(joinDeep(array1, ', '), '1, 2, 3, 4, 5');

var array2 = [[], [[]], [[], [[[]]]]];
assert.deepEqual(joinDeep(array2, ', '), '');
```
