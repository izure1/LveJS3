import each from './each';


/**
 * 
 * @param {String, Function} c
 * @returns {Boolean}
 */
export default function toggleClass(c) {

  let r;
  let t, f;

  if (typeof c === 'function') {
    f = c;
  }

  r = [];
  each.call(this, function () {

    t = f ? f.call(this, this) : c;
    t = t.split(' ');

    for (let u of t) {

      if (this.hasClass(u)) this.removeClass(u);
      else this.addClass(u);

    }

  });

  return this;

};