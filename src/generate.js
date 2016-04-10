import path from 'path';
import sha1 from 'sha1';
import fs from 'fs';
import make from './make';
import filename from './filename';
import move from './move';
import last from './last';

function generate(opts) {
  const output = last(opts.output) === '/' ? opts.output : `${opts.output}/`;

  const hash = sha1('message');

  fs.writeFileSync(
    path.join(opts.storage, 'manifest.json'),
    JSON.stringify({ hash }),
    'utf-8'
  );

  opts.assets.forEach((asset) => {
    move(asset, path.join(output, make(
      filename(asset),
      hash
    )));
  });
}