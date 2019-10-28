import LveJSInputKey from '../../LveJSInputKey'



function convertToUpperCase(name) {

  return name.toString().toUpperCase().replace(/\s/g, '_')

}

export default function initKeys(keys) {

  let codes = {}

  for (let i in keys) {

    let j = convertToUpperCase(i)
    codes[j] = new LveJSInputKey(keys[i], this)

  }

  this.keys = codes

  return this

}