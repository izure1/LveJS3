'use strict';

/**
 * 
 * @param {Number} i
 */
export default function get(n = 0) {

  if (n < 0) {
    n = this.context.length + n;
  }

  return this.context[n];

};