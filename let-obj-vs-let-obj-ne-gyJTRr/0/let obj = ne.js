let obj = new Map()
for(let key of keys){
  let p = obj;
  for(let part of key){
    if(!p.has(part)) p.set(part, new Map());
    p = p.get(part)
  }
  if(!p.has('value')) p.set('value', 0);
  p.set('value', p.get('value') + 0.5 + Math.random())
}