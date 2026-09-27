import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [config, projects, blog, readme, profiles] = await Promise.all([
  readFile(new URL('../src/content.config.ts', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/projects/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/blog/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../README.md', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/profiles.ts', import.meta.url), 'utf8'),
]);

for (const format of [
  'system-deep-dive',
  'flight-log',
  'postmortem',
  'cross-system-test',
]) {
  assert.match(config, new RegExp(format));
}

assert.match(config, /optional\(\)/);
assert.match(projects, /activeProfile\.projects/);
assert.match(profiles, /Native Mobile/);
assert.match(profiles, /React and React Native/);
assert.match(profiles, /Frontend and Product Systems/);
assert.match(profiles, /Game Lab/);
assert.match(profiles, /Under construction/);
assert.match(profiles, /AI Security Lab/);
assert.match(blog, /Flight Log/);
assert.match(blog, /System Deep Dives/);
assert.match(readme, /50% mobile and product engineering/);
assert.match(readme, /50% AI security and application security/);
assert.match(readme, /SITE_PROFILE/);

console.log('projects and editorial tests passed');
