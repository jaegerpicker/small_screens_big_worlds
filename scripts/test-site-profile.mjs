import assert from 'node:assert/strict';

import { parseProfileId, resolveProfileId, PROFILE_IDS } from '../src/lib/site-profile.ts';

assert.deepEqual([...PROFILE_IDS], ['security', 'mobile-games']);
assert.equal(parseProfileId('security'), 'security');
assert.equal(parseProfileId('mobile-games'), 'mobile-games');
assert.equal(parseProfileId('SECURITY'), null);
assert.equal(parseProfileId(''), null);
assert.equal(parseProfileId(undefined), null);
assert.equal(resolveProfileId('mobile-games', 'security'), 'mobile-games');
assert.equal(resolveProfileId('typo', 'security'), 'security');
assert.equal(resolveProfileId(undefined, 'mobile-games'), 'mobile-games');

delete process.env.SITE_PROFILE;
const { profiles, activeProfileId } = await import('../src/data/profiles.ts');
const { DEFAULT_PROFILE } = await import('../src/data/active-profile.ts');

assert.equal(activeProfileId, DEFAULT_PROFILE);
assert.deepEqual(Object.keys(profiles).sort(), [...PROFILE_IDS].sort());

// Every profile must fill the same fields so no page renders blank copy.
function shape(value) {
  if (Array.isArray(value)) return value.length > 0 ? ['array', shape(value[0])] : ['array'];
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, shape(value[key])]));
  }
  return typeof value;
}

function assertFilled(value, path) {
  if (typeof value === 'string') assert.ok(value.trim(), `${path} is empty`);
  else if (Array.isArray(value)) {
    assert.ok(value.length > 0, `${path} is empty`);
    value.forEach((item, index) => assertFilled(item, `${path}[${index}]`));
  } else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) assertFilled(item, `${path}.${key}`);
  }
}

const [first, ...rest] = Object.values(profiles);
for (const profile of [first, ...rest]) {
  assert.deepEqual(shape(profile), shape(first), `${profile.id} fields differ from ${first.id}`);
  assertFilled(profile, profile.id);
  assert.equal(profile.systems.length, 4, `${profile.id} orbit map needs four systems`);
}

assert.equal(profiles.security.home.headlinePrefix, 'Security for');
assert.equal(profiles['mobile-games'].home.headlinePrefix, 'Software for');

console.log('site profile tests passed');
