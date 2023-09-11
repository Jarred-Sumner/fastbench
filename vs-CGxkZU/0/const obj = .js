const obj = new Map()

const len = 100000;

for (let i = 0; i < len; i++) {
  const key = i + 'teste';
  obj.set(key, i)
}

console.log(obj.get(len - 1) + 'teste')


