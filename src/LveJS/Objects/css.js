import each from './each';
import {
  parseArguments,
  applyArguments
} from '../Utils/arguments';
import calcValue from '../Helpers/calcValue';


/**
 * 
 * @param {String|Object} o 
 * @param {*} v 
 */
export default function css(o, v) {

  let t;
  let r;
  let d;

  t = this.get();

  if (!t) {
    return this;
  }

  t = t.style;
  r = parseArguments.apply(t, arguments);

  if (r.IS_GET) {
    return r.VALUE;
  }

  each.call(this, function () {
    d = calcValue.call(this, r.VALUE, this.style);
    applyArguments.call(this.style, d);
  });

  return this;

};