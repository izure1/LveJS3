import each from './each'
import {
  parseArguments,
  applyArguments
} from '../Utils/arguments'
import calcValue from '../Helpers/calcValue'


export default function sprite(o = {}) {

  let t
  let r
  let d

  t = this.get()

  if (!t) {
    return this
  }

  t = t.spriteset
  r = parseArguments.apply(t, arguments)

  if (r.IS_GET) {
    return r.VALUE
  }

  each.call(this, function () {
    d = calcValue.call(this, r.VALUE, this.spriteset)
    applyArguments.call(this.spriteset, d)
  })

  return this

}