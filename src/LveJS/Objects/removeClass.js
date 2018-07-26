import each from './each';


/**
 * 
 * @param {String|Function} c
 * @returns {Boolean}
 */
export default function removeClass(c) {

  let r;
  let t, f;

  if (typeof c === 'function') {
    f = c;
  }

  r = [];
  each.call(this, function () {

    t = f ? f.call(this, this) : c;

    c = this.className;
    c += '';
    c = c.split(' ');

    t += '';
    t = t.split(' ');

    c = c.filter(s => t.indexOf(s) === -1);
    t = new Set(c);

    t.delete('');

    t = Array.from(t);

    this.className = t.join(' ');

  });

  return this;

};