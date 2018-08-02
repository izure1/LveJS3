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
  let v1, v2;

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

  if (typeof d === 'object') {
    d = d.speed;
  }

  if (r.IS_GET) {
    return this;
  }


  each.call(this, function () {

    v1 = this.style;
    v2 = calcValue.call(this, r.VALUE, this.style);

    for (let p in v2) {

      this.animationset[p] = {
        type: e,
        duration: d,
        runtime: 0,
        start: v1[p],
        end: v2[p]
      };

      this.emit('animatestart', {
        propertyName: p,
        value: v1[p]
      });

    }

  });

  return this;

};