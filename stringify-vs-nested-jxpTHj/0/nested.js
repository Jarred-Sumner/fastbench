let obj = {}
for(let key of keys){
  let p = obj;
  for(let part of key){
    if(!p[part]) p[part] = {};
    p = p[part]
  }
  if(!p.value) p.value = 0;
  p.value += 0.5 + Math.random()
}