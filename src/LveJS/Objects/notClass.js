import each from './each';


/**
 * 
 * @param {String|Object} c
 * @param {*} LveJSObjectSession
 */
export default function notClass(c) {

  let r;
  let w;

  r = [];
  w = this.__system__.world;

  each.call(this, function () {

    if (!this.hasClass(c)) r.push(this);

  });

  return new w.classes.LveJSObjectSession(w, this.name, r);

};