import LveJSEvent from '../../LveJSEvent';
import HANDLER_VIDEO from './Vars/HANDLER.VIDEO';
import HANDLER_SPRITE from './Vars/HANDLER.SPRITE';


let handler;

handler = {};
handler.sprite = HANDLER_SPRITE;
handler.video = HANDLER_VIDEO;


export default function from(t, e, o) {

  let v;
  let h;

  // 이벤트 정보 생성
  h = handler[t.type] || {};
  v = new LveJSEvent(e, t).attachProperties(o);

  // 핸들러 함수 작동
  if (e in h) {

    h = h[e];
    h.call(t);

  }


  // 전역 이벤트 발생
  if (e in this.global) {

    for (let f of this.global[e]) f.call(t, v);

  }

  // 로컬 이벤트 발생
  if (e in t.__system__.events) {

    for (let f of t.__system__.events[e]) f.call(t, v);

  }

  return this;

};