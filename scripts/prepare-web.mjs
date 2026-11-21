import { mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve('.');
const web = resolve(root, 'www');

await mkdir(web, { recursive: true });
await copyFile(resolve(root, 'index.html'), resolve(web, 'index.html'));
await copyFile(resolve(root, 'manifest.json'), resolve(web, 'manifest.json'));
await copyFile(resolve(root, 'sw.js'), resolve(web, 'sw.js'));

console.log('Web assets preparados en ./www');
