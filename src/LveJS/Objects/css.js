import each from './each';
import {
  parseArguments,
  applyArguments
} from '../Utils/arguments.js';


/**
 * 
 * @param {String, Object} o 
 * @param {*} v 
 */
export default function css(o, v) {

  let t;
  let r;

  t = this.get();
  t = t.style;
  r = parseArguments.apply(t, arguments);

  if (r.IS_GET) {
    return r.VALUE;
  }

  each.call(this, function () {
    applyArguments.call(this.style, r.VALUE);
  });

  return this;

};