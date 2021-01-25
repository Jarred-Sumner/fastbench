import _ from 'lodash';
import underscore from 'underscore';
import * as R from 'ramda';

const array = new Array(1000).map(a => Math.random() * 1000);
array[20] = 4;


function comparator(value) {
  return value < 0.2;
}