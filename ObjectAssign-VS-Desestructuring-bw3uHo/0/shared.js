let obj1 = {}
let obj2 = {}
let obj3 = {}

for(let i = 0; i < 500; i++) {
  obj1[Math.floor(Math.random() * 1000000)] = Math.floor(Math.random() * 10000);
  obj2[Math.floor(Math.random() * 1000000)] = Math.floor(Math.random() * 10000);
  obj3[Math.floor(Math.random() * 1000000)] = Math.floor(Math.random() * 10000);
}
