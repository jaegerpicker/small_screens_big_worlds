import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const [resume, about, footer, giscus, rss, content] = await Promise.all([
  readFile(new URL('../src/pages/resume.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/about.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Footer.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Giscus.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/rss.xml.js', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/site-content.ts', import.meta.url), 'utf8'),
]);

assert.match(resume, /resume\.roleLine/);
assert.match(content, /AI security researcher/);
assert.match(content, /Red-Team Methodology/);
assert.match(content, /Engineering Leadership/);
assert.match(resume, /@media print/);
// The resume opens in the conventional view for recruiters.
assert.match(resume, /defaultView="direct"/);
assert.match(resume, /data-print-resume/);
assert.match(resume, /<span class="direct-only">Skills<\/span>/);
assert.match(resume, /html\[data-view='direct'\]/);
assert.match(about, /Small Screens \/ Big Worlds/);
assert.match(about, /about\.lead/);
assert.match(content, /AI-assisted/);

for (const source of [footer, giscus]) {
  assert.match(source, /small_screens_big_worlds/);
  assert.doesNotMatch(source, /ai_sec_research/);
}

assert.match(rss, /Small Screens \/ Big Worlds/);

console.log('profile repositioning tests passed');
