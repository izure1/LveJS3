import easing from '../Utils/easing';


export default function __animationUpdate(tt = 0) {

  let v;
  let d;

  for (let p in this.animationset) {

    v = this.animationset[p];
    v.runtime += tt;

    if (v.runtime > v.duration) {
      v.runtime = v.duration;
      d = true;
    }
    
    this.style[p] = easing(v.type, v.runtime, v.start, v.end - v.start, v.duration);

    if (d) {
      delete this.animationset[p];
      this.style[p] = v.end;
      this.emit('animateend', {
        propertyName: p
      });
    }

  }

  return this;

};