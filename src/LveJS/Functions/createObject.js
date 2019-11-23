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
  let attr, css

  for (const p in TYPE) {
    if (o[p]) continue
    throw TYPE[p].message
  }


  attr = new INIT_ATTRIBUTE
  css = new INIT_STYLE

  attr = attr[o.type] || {}
  css = css[o.type] || {}


  // 객체 속성을 정의합니다
  t = new this.classes.LveJSObject(this, u, o.type)

  delete o.type
  attr = {
    ...attr,
    ...o
  }

  t.attr(attr).__setElementEvent()
  t.css(css)

  // run reactivity for all properties
  t.__runAllPropertiesHandler()

  t.__system__.ready.create.done()

  return t

}