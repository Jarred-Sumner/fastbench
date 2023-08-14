const newArr = arr.reduce((acc, curr) => {
  const obj = curr.fn() 
  acc.push(obj)
  return acc
}, [])