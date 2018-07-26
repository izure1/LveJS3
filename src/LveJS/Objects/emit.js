import each from './each';
import LveJSEvent from '../LveJSEvent';

/**
 * 
 * @param {String} e Event name
 * @param {Object} o Detail information
 */
export default function emit(e, o = {}) {

  let t;
  each.call(this, function () {

    for (const f of this.__system__.events[e]) {
      t = new LveJSEvent(e, this).attachProperties(o);
      f.call(this, t);
    }

  });

  return this;

};