import each from './each';

import {
  parseArguments
} from '../Utils/arguments';
import calcValue from '../Helpers/calcValue';


/**
 * 
 * @param {String|Object} o Properties name
 * @param {Number} v Change in value
 * @param {Number} d Duration
 * @param {*} e Easing type
 */
export default function animate(o, v, d = 0, e = 'linear') {

  let t;
  let r;
  let v1, v2, vo;

  t = this.get();

  if (!t) {
    return this;
  }

  t = this.style;
  r = parseArguments.apply(t, arguments);


  if (typeof o === 'object') {
    d = arguments[1] || 0;
    e = arguments[2] || 'linear';
  }

  if (r.IS_GET) {
    return this;
  }


  each.call(this, function () {

    vo = Object.assign({}, this.style, this.__system__.style);
    v1 = vo;
    v2 = calcValue.call(this, r.VALUE, vo);

    for (let p in v2) {

      let dr;

      dr = d;

      if (typeof d === 'object') {
        dr = v2[p] - v1[p];
        dr = Math.abs(dr);
        dr = dr / d.speed * 1000;
      }

      this.animationset[p] = {
        type: e,
        duration: dr,
        runtime: 0,
        start: v1[p],
        end: v2[p],
      };

      this.emit('animatestart', {
        propertyName: p,
        value: v1[p]
      });

    }

  });

  return this;

};