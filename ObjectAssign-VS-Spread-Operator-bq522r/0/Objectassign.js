let newObj = {}

for(let i = 0; i < 500; i++) {
  newObj[i] = Object.assign({}, obj1, obj2, obj3)
}

