/**
 * 
 * @param {String|Object} o Properties name
 * @param {*} v Value
 */
export default function element() {

  let t

  t = this.get()

  if (!t) {
    return null
  }

  return t.element

}