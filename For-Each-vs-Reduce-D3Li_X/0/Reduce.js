const newArr = arr.reduce((acc, curr) => {
  const obj = curr.fn() 
  return [...acc, obj]
}, [])