import fs from 'fs';

function move(src, dest) {
  fs.writeFileSync(
    last(dest) === '/' ? `${dest}${filename(src)}` : dest,
    fs.readFileSync(src, 'utf-8'),
    'utf-8'
  );
}

export default move;