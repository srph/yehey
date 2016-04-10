import generate from './generate';
import compile from './compile';

generate({
  assets: [`${__dirname}/playground/pogi.js`],
  storage: `${__dirname}/playground`,
  output: `${__dirname}/output`,
  // html: `${__dirname}/playground/index.html`
});

compile({
  storage: `${__dirname}/playground`,
  html: `${__dirname}/playground/index.html`,
  output: `${__dirname}/output`
});