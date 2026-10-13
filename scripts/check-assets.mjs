import { existsSync } from 'node:fs';
import { projects } from '../src/data/projects.js';

const images = new Set(['logo2.png', 'background1.jpg', 'background2.jpg', 'descripcion.png']);
for (const project of projects) {
  images.add(project.star).add(project.logo).add(project.cover);
  for (const section of project.sections) {
    if (section.background) images.add(section.background);
    if (section.image) images.add(section.image);
    section.images?.forEach((image) => images.add(image));
  }
}
const missing = [...images].filter((image) => !existsSync(new URL(`../public/img/${image}`, import.meta.url)));
if (missing.length) {
  console.error('Missing images:', missing);
  process.exitCode = 1;
} else console.log(`Verified ${images.size} image references.`);
