'use strict';

/**
 * 
 * @param {Function} f 
 */
function documentReady(f) {

  if (document.readyState != 'loading') f();
  else {
    document.addEventListener('DOMContentLoaded', f);
  }

}

/**
 * 
 * @param {HTMLElement} t 
 * @param {Function} f 
 */
function elementReady(t, f, g = f) {

  if (t.complete === undefined) f.call(t, t);
  else {

    if (t.complete) f.call(t, t);
    else {
      t.addEventListener('load', () => f.call(t, t));
      t.addEventListener('error', () => f.call(t, t));
    }

  }

}

export default function ready(f, g) {

  if (this === document || this === window) documentReady(f);
  else elementReady(this, f, g);

};