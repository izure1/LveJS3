import each from './each';

import {
  parseArguments
} from '../Utils/arguments';
import calcValue from '../Helpers/calcValue';


export default function animate(o, v, d = 0, e = 'linear') {

  let t;
  let r;
  let w;
  let d;

  t = this.get();
  r = parseArguments.apply(t.style, arguments);
  w = this.__system__.world;


  if (typeof o === 'object') {
    d = arguments[1] || 0;
    e = arguments[2] || 'linear';
  }


  each.call(this, function () {

    for (let p in r.VALUE) {
      w.renderer.animation.add(`${this.name}.${p}`, e, this.style[p], r.VALUE[p], d);
    }
    
  });

  return this;

};