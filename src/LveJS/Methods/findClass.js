import each from './each'


/**
 * 
 * @param {String|Object} c
 */
export default function findClass(c) {

  let r
  let w

  r = []
  w = this.__system__.world

  each.call(this, function () {

    if (this.hasClass(c)) r.push(this)

  })

  return new w.classes.LveJSObjectSession(w, this.name, r)

}