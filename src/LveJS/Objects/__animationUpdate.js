import easing from '../Utils/easing';


export default function __animationUpdate(tt = 0) {

  let p, v;
  let d;

  for (let t of this.__system__.animation) {

    o = t[0];
    v = t[1];
    d = false;

    v.runtime += tt;

    if (v.runtime > v.duration) {
      v.runtime = v.duration;
      d = true;
    }

    this.style[o] = easing(v.type, v.runtime, v.start, v.end - v.start, v.duration);

    // 완료된 애니메이션 캐시를 삭제합니다
    if (d) {
      this.__system__.animation.delete(o);
    }

  }

  return this;

};