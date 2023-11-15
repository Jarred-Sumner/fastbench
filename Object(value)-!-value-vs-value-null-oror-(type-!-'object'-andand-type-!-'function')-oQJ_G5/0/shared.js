function isPrimitive1(value) {
  return Object(value) !== value
}

function isPrimitive2(value) {
  if (value === null) {
    return true
  }
  const type = typeof value
  return type != 'object' && type != 'function'
}

const values = [null, undefined, true, false, 1, 10n, 'str', Symbol()]