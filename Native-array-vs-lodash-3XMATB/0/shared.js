import _ from 'lodash';

const array = new Array(1000).map(a => Math.random() * 100);
array[20] = 0;


function comparator(value) {
  return value < 0.5;
}