function isUndefined(v) {
  return v === undefined
}

function isNull(v) {
  return v === null
}

function isEmptyString(v) {
  return v === ''
}

function isEmptyArray(v) {
  return Array.isArray(v) && v.length === 0
}

function isZero(v) {
  return v === 0
}


export {
  isUndefined,
  isNull,
  isEmptyString,
  isEmptyArray,
  isZero
}