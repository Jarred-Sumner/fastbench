let newObj = {}

for(let i = 0; i < 500; i++) {
  newObj[i] = { ...obj1, ...obj2, ...obj3 }
}