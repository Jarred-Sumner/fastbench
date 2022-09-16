import deepTrim from "https://cdn.skypack.dev/deep-trim@1.0.0";

const typeOf = obj =>
  ({}.toString
    .call(obj)
    .match(/\s([a-z|A-Z]+)/)[1]
    .toLowerCase())
const isString = obj => typeOf(obj) === 'string'
const isObject = obj => typeOf(obj) === 'object'
const isArray = obj => typeOf(obj) === 'array'

const deepTrimm = object => {
  if (isString(object)) return object.trim()
  if (isArray(object)) return object.map(item => deepTrim(item))
  if (isObject(object)) {
    return Object.keys(object).reduce((newObj, key) => {
      newObj[key] = deepTrim(object[key])
      return newObj
    }, {})
  }
  return object
}