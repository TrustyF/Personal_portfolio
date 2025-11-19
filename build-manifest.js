// build-manifest.js
import fs from 'fs';
import path from 'path';

const folders = [
  { name: 'projects', path: './public/assets/project_images' },
  { name: 'project_articles', path: './src/project_pages/pages/' },
  { name: 'software_icons', path: './public/assets/software_icons' },
  { name: 'people_icons', path: './public/assets/people_icons' },
  { name: 'company_icons', path: './public/assets/company_icons' },
  { name: 'icons', path: './public/assets/icons' },
];

const manifest = {};

folders.forEach(({ name, path: folderPath }) => {
  const items = fs.readdirSync(folderPath).filter(file => !file.startsWith('.'));
  manifest[name] = items.map(file => `${file}`);
});

fs.writeFileSync(
  './public/assets/manifest.json',
  JSON.stringify(manifest, null, 2)
);

console.log('Manifest generated!');
