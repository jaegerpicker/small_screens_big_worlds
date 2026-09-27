import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [header, homepage, orbitMap, content, profiles] = await Promise.all([
  readFile(new URL('../src/components/Header.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/OrbitMap.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/site-content.ts', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/profiles.ts', import.meta.url), 'utf8'),
]);

assert.match(header, /Small Screens/);
assert.match(header, /Shawn Campbell/);
assert.match(homepage, /home\.headlinePrefix/);
assert.match(homepage, /small screens/);
assert.match(homepage, /big worlds/);
assert.match(homepage, /OrbitMap/);
assert.match(homepage, /MissionCard/);
assert.match(orbitMap, /<ul/);
assert.match(orbitMap, /href=/);
assert.match(content, /activeProfile\.systems/);
assert.match(content, /activeProfile\.missions/);
assert.match(profiles, /Security for/);
assert.match(profiles, /Software for/);
assert.match(profiles, /Flight proven/);
assert.match(profiles, /Under construction/);
assert.match(profiles, /Security and Architecture/);
assert.match(profiles, /AI Security Research/);

console.log('publication shell tests passed');
