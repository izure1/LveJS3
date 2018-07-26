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
export default function data(o, v) {

  let t;
  let r;
  let d;

  t = this.get();
  t = t.style;
  r = parseArguments.apply(t, arguments);

  if (r.IS_GET) {
    return r.VALUE;
  }

  each.call(this, function () {
    d = calcValue.call(this, r.VALUE, this.dataset);
    applyArguments.call(this.dataset, d);
  });

  return this;

};