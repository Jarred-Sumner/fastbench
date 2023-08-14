const newArr = [];

for (let i = 0; i < arr.length; i++) {
  const obj = arr[i].fn() 
  newArr.push(obj)  
}