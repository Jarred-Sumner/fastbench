let obj = {}
for(let key of keys){
  let s = key.join(',')
  if(!obj[s]) obj[s] = 0;
  obj[s] += 0.5 + Math.random()
}