const data = new Array(2000).fill(null).map((_, index) => ({index}))
const dataSet = new Set(data)
const length = data.length