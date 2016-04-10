import {sep} from 'path';

function location(dir) {
  const x = dir.split(sep);
  x.pop();
  return x.join(sep);
}

export default location;