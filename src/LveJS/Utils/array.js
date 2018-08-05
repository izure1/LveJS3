'use strict';

/**
 * 
 * @param {Array} t Target array 
 * @param {*} m The Element of delete hoping.
 */
function removeArrayItem(t, m) {

  let i;

  if (t.indexOf(m) === -1) {
    return t;
  }

  i = t.length;

  while (i--) {

    if (t[i] !== m) {
      continue;
    }

    t.splice(i, 1);

  }

  return t;

}

/**
 * 
 * @param {Array} Target array 
 */
function removeDuplicate(t) {

  return [...new Set(t)];

}

export {
  removeArrayItem,
  removeDuplicate
};