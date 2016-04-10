function make(file, hash) {
  const info = file.split('.');
  return `${info[0]}.${hash}.${info[1]}`;
}

export default make;