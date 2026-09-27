import assert from 'node:assert/strict';

import {
  parseViewMode,
  resolveViewMode,
} from '../src/lib/view-mode.ts';

assert.equal(parseViewMode('direct'), 'direct');
assert.equal(parseViewMode('ops'), 'ops');
assert.equal(parseViewMode('DIRECT'), null);
assert.equal(parseViewMode('other'), null);
assert.equal(parseViewMode(null), null);

assert.equal(resolveViewMode('direct', 'ops'), 'direct');
assert.equal(resolveViewMode('ops', 'direct'), 'ops');
assert.equal(resolveViewMode('invalid', 'direct'), 'direct');
assert.equal(resolveViewMode(null, 'direct'), 'direct');
assert.equal(resolveViewMode(null, 'invalid'), 'ops');
assert.equal(resolveViewMode(null, null), 'ops');

// A page may set its own default; an explicit query or stored choice still wins.
assert.equal(resolveViewMode(null, null, 'direct'), 'direct');
assert.equal(resolveViewMode(null, 'ops', 'direct'), 'ops');
assert.equal(resolveViewMode('ops', null, 'direct'), 'ops');
assert.equal(resolveViewMode(null, null, 'nonsense'), 'ops');

console.log('view-mode tests passed');
