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

    document.addEventListener('DOMContentLoaded', function cb() {
      document.removeEventListener('DOMContentLoaded', cb);
      f();
    });

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

      t.addEventListener('load', function cb() {
        t.removeEventListener('load', cb);
        f.call(t, t);
      });
      t.addEventListener('error', function cb() {
        t.removeEventListener('error', cb);
        f.call(t, t)
      });

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