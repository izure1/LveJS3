import LveJSEvent from '../../LveJSEvent'

import HANDLER_DEFAULT from './Vars/HANDLER.DEFAULT'
import HANDLER_VIDEO from './Vars/HANDLER.VIDEO'


let handler

handler = {}
handler.video = HANDLER_VIDEO

for (let type in handler) {
  handler[type] = Object.assign({}, HANDLER_DEFAULT, handler[type])
}


export default function from(t, e, o) {

  let v
  let h

  // 이벤트 정보 생성
  h = handler[t.type] || HANDLER_DEFAULT
  v = new LveJSEvent(e, t).attachProperties(o)

  // 핸들러 함수 작동
  if (e in h) {

    h = h[e]
    h.call(t)

  }


  // 전역 이벤트 발생
  if (e in this.global) {

    for (let [h, o] of this.global[e]) {

      h.call(t, v)

      if (o.once) {
        this.global[e].delete(h)
      }

    }

  }

  // 로컬 이벤트 발생
  if (e in t.__system__.events) {

    for (let [h, o] of t.__system__.events[e]) {

      h.call(t, v)

      if (o.once) {
        t.__system__.events[e].delete(h)
      }

    }

  }

  return this

}