import easing from '../Utils/easing';
import each from './each';


export default function getEasingData(attr) {

  let a;
  let s, g;

  a = this.__system__.ani_init;
  s = a.origin[attr];
  g = a.goal[attr];

  // animating이 아닌 객체이거나, 속성 매개변수가 넘어오지 않았을 시
  if (!a.count_max || !attr) {
    return;
  }

  // 존재하지 않는 속성일 경우
  if (s === undefined || g === undefined) {
    return;
  }

  // t: current time, b: begInnIng value, c: change In value, d: duration
  let t, b, c, d, e;

  t = a.count[attr] * 1000 / 60 || 1;
  d = a.duration[attr] || 1;
  e = a.easing[attr] || 'linear';
  b = s;
  c = g - s;

  return easing(e, t, b, c, d);

};