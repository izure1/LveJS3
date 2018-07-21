import each from './each';

import {
  parseArguments
} from '../Utils/arguments';
import calcValue from '../Helpers/calcValue';


export default function animate(o, v, d = 0, e = 'linear') {

  let t;
  let r;
  let v1, v2;

  t = this.get();
  r = parseArguments.apply(t.style, arguments);


  if (typeof o === 'object') {
    d = arguments[1] || 0;
    e = arguments[2] || 'linear';
  }

  if (r.IS_GET) {
    return this;
  }


  each.call(this, function () {

    v1 = this.style;
    v2 = calcValue.call(this, r.VALUE, this.style);

    for (let p in v2) this.__system__.animation[p] = {
      type: e,
      duration: d,
      runtime: 0,
      start: v1[p],
      end: v2[p]
    };

  });

  return this;

};