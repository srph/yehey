import {sep} from 'path';
import last from './last';

function filename(file) {
  return last(file.split(path.sep));
}

export default filename;