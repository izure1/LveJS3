import each from './each'
import {
  parseArguments,
  applyArguments
} from '../Utils/arguments'
import calcValue from '../Helpers/calcValue'


export default function particle(o = {}) {

  let t
  let r
  let d

  t = this.get()

  if (!t) {
    return this
  }

  t = t.particleset
  r = parseArguments.apply(t, arguments)

  if (r.IS_GET) {
    return r.VALUE
  }

  each.call(this, function () {
    d = calcValue.call(this, r.VALUE, this.particleset)
    applyArguments.call(this.particleset, d)
  })

  return this

}