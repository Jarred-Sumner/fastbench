let obj = {}
for(let key of keys){
  let p = obj;
  for(let i = 0; i < key.length; i++){
    let part = key[i];
    if(i === key.length - 1){
      if(!p[part]) p[part] = 0;
      p[part] += 0.5 + Math.random()
    }else{
      if(!p[part]) p[part] = {};
      p = p[part]
    }
  }
}