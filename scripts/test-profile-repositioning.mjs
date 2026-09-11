import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [resume, about, footer, giscus, rss, profiles] = await Promise.all([
  readFile(new URL('../src/pages/resume.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/about.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Footer.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Giscus.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/rss.xml.js', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/profiles.ts', import.meta.url), 'utf8'),
]);

assert.match(resume, /activeProfile\.resume/);
assert.match(profiles, /Mobile and Product Engineer/);
assert.match(profiles, /AI security researcher/);
assert.match(profiles, /React Native/);
assert.match(profiles, /Game Development/);
assert.match(profiles, /Current learning focus/);
assert.match(resume, /@media print/);
assert.match(resume, /html\[data-view='direct'\]/);
assert.match(about, /Small Screens \/ Big Worlds/);
assert.match(about, /activeProfile\.about/);
assert.match(profiles, /AI-assisted/);
assert.match(profiles, /Godot and Unreal/);

for (const source of [footer, giscus]) {
  assert.match(source, /small_screens_big_worlds/);
  assert.doesNotMatch(source, /ai_sec_research/);
}

assert.match(rss, /Small Screens \/ Big Worlds/);

console.log('profile repositioning tests passed');
