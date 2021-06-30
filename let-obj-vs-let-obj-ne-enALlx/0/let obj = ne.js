let obj = new Map()
for(let key of keys){
  let p = obj;
  for(let part of key){
    if(!p.has(part)) p.set(part, new Map());
    p = p.get(part)
  }
  if(!p.value) p.value = 0;
  p.value += 0.5 + Math.random()
}