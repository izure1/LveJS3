import each from './each'

import {
  parseArguments
} from '../Utils/arguments'
import calcValue from '../Helpers/calcValue'
import getObjectScope from '../Helpers/getObjectScope'

import LveJSVector from '../LveJSVector'


/**
 * 
 * @param {String|Object} o Properties name
 * @param {Number} v Change in value
 * @param {Number} d Duration
 * @param {String} e Easing type
 * @param {String} s Scope (Default: 'style')
 */
export default function animate(o, v, d = 0, e = 'linear', s = 'style') {

  let t
  let r
  let v1, v2, vo

  t = this.get()

  if (!t) {
    return this
  }

  if (typeof o === 'object') {
    d = 1 in arguments ? arguments[1] : 0
    e = 2 in arguments ? arguments[2] : 'linear'
    s = 3 in arguments ? arguments[3] : 'style'
  }

  if (s) {
    s = `.${s}`
  }


  let {
    scope,
    property
  } = getObjectScope(t, `${s}.`)

  t = scope
  r = parseArguments.apply(t, arguments)

  if (r.IS_GET) {
    return this
  }


  each.call(this, function () {

    vo = Object.assign({}, t)

    if (s === 'style') {
      Object.assign(vo, this.__system__.style)
    }

    v1 = vo
    v2 = calcValue.call(this, r.VALUE, vo)

    for (let p in v2) {

      let dr = d

      if (typeof d === 'object') {
        dr = v2[p] - v1[p]
        dr = Math.abs(dr)
        dr = dr / d.speed * 1000
      }

      this.animationset[`${s}.${p}`] = new LveJSVector(v1[p], v2[p], dr, e)

      this.emit('animatestart', {
        scope: t,
        property,
        value: v1[p]
      })

    }

  })

  return this

}