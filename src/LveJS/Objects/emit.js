import each from './each';

/**
 * 
 * @param {String} e Event name
 * @param {Object} o Detail information
 */
export default function emit(e, o = {}) {

  let t;
  let emt;

  emt = this.__system__.world.emitter;
  each.call(this, function () {

    emt.from(this, e, o);

  });

  return this;

};