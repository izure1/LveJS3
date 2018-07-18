'use strict';

/**
 * 
 * @param {Array} t Target array 
 * @param {*} m The Element of delete hoping.
 * @param {Number} n repeat time
 */
function removeArrayItem(t, m, n = t.length) {

  if (t.indexOf(m) === -1) {
    return t;
  }

  let i = t.length;

  t.reverse();

  while (--i) {
    if (!n) break;
    if (t[i] === m) {
      t.splice(i, 1);
      n--;
    }
  }

  t.reverse();
  return t;

}

export {
  removeArrayItem
};