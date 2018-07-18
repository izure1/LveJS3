'use strict';

/**
 * 
 * @param {Function} f 
 */
function documentReady(f) {

  let r;

  r = true;

  if (document.readyState != 'loading') f();
  else {
    document.addEventListener('DOMContentLoaded', f);
    r = false;
  }

  return r;

}

/**
 * 
 * @param {HTMLElement} t 
 * @param {Function} f 
 */
function elementReady(t, f) {

  let r;

  r = true;

  if (t.complete === undefined) f.call(t, t);
  else {

    if (t.complete) f.call(t, t);
    else {
      t.addEventListener('load', () => f.call(t, t));
      t.addEventListener('error', () => f.call(t, t));
      r = false;
    }

  }

  return r;

}

export default function ready(f) {

  let r;

  if (this === document || this === window) r = documentReady(f);
  else r = elementReady(this, f);

  return r;

};