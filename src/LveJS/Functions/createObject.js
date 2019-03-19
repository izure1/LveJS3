import TYPE from '../Methods/Vars/TYPE.js'
import INIT_ATTRIBUTE from '../Methods/Vars/INIT_ATTRIBUTE.js'
import INIT_STYLE from '../Methods/Vars/INIT_STYLE.js'


/**
 * 
 * @param {String} u Object name
 * @param {Object} o Object properties
 */
export default function (u, o = {}) {

  let t
  let v1, v2

  for (const p in TYPE) {
    if (o[p]) continue
    throw TYPE[p].message
  }


  v1 = new INIT_ATTRIBUTE
  v2 = new INIT_STYLE
  v1 = v1[o.type] || {}
  v2 = v2[o.type] || {}

  // 객체 속성을 정의합니다
  t = new this.classes.LveJSObject(this, u)

  t.attr(v1).__setElementEvent()
  t.attr(o).css(v2).css(t.css()).sprite(t.sprite())

  return t

}