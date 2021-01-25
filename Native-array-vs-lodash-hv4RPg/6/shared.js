import _ from 'lodash';

const array = new Array(1000).map(a => Math.random() * 1000);
array[20] = 3;


function comparator(value) {
  return value < 0.2;
}