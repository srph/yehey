import path from 'path';
import fs from 'fs';
import make from './make';
import filename from './filename';
import location from './location';

function compile(opts) {
  const hash = JSON.parse(fs.readFileSync(`${opts.storage}/manifest.json`)).hash;
  const file = fs.readFileSync(opts.html, 'utf-8');

  fs.writeFileSync(
    path.join(opts.output, filename(opts.html)),
    file.replace(/{yehey\(\'([A-Za-z\.\/]+)\'\)}/g, (match) => {
      // Extracted filename
      const extracted = match
        .replace(/{yehey\(\'/g, '')
        .replace(/\'\)}/g, '');
      return `${location(extracted)}/${make(filename(extracted), hash)}`
    }),
    'utf-8'
  );
}