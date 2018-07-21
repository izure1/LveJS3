import easing from '../Utils/easing';


export default function __animationUpdate(tt = 0) {

  let v;
  let d;

  for (let p in this.__system__.animation) {

    v = this.__system__.animation[p];
    d = false;

    v.runtime += tt;

    if (v.runtime > v.duration) {
      v.runtime = v.duration;
      d = true;
    }

    this.style[p] = easing(v.type, v.runtime, v.start, v.end - v.start, v.duration);

    // 완료된 애니메이션 캐시를 삭제합니다
    if (d) {
      delete this.__system__.animation[p];
    }

  }

  return this;

};