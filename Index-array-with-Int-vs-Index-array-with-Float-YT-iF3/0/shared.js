const data = [0, 1];
const dataInt = data.map(v=>0-v);
const dataMix = data.map(v=>-v);

const length = 100;
const idxInt = [];
const idxMix = [];
for(let i=0; i<length; i++) {
  idxInt.push(i%2);
  idxMix.push(-(i%2));
}