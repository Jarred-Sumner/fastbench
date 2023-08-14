const newArr = [];

arr.forEach((item) => {
  const handler = item.fn() 
  newArr.push(handler)
})
