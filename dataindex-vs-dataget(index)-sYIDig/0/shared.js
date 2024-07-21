const data = new Array(200).fill(null).map((_, index) => (index))
const dataSet = new Map(data.map((obj) => [obj.key, obj.value]))
const length = data.length