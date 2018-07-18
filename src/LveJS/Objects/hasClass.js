import each from './each';


/**
 * 
 * @param {String, Function} c
 * @returns {Boolean}
 */
export default function hasClass(c) {

  let r;
  let t, f;

  r = 0;

  if (typeof c === 'function') {
    f = c;
  }

  each.call(this, function () {

    t = f ? f.call(this, this) : c;

    c = this.className;
    c += '';
    c = c.split(' ');

    // if it doesn't has same classname
    if (c.indexOf(t) === -1) {
      r++;
    }

  });

  return !r;

};