'use strict';

/**
 * 
 * @param {StirObject} t
 * target to observed object
 * @param {Object} h
 * namespace object for handler functions
 * @returns {Proxy} 
 * 
 */
export default function getPropertiesProxy(t, h) {

  let self = this;

  return new Proxy(t, {
    get(t, p) {
      return t[p];
    },
    set(t, p, v) {
      t[p] = h[p] ? h[p].call(self, p, v, t) : v;
      return true;
    }
  });

};