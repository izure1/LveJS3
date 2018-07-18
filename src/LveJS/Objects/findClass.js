import each from './each';


/**
 * 
 * @param {String, Object} c
 * @param {*} LveJSObjectSession
 */
export default function findClass(c) {

  let r;

  r = [];
  each.call(this, function () {

    if (this.hasClass(c)) r.push(this);

  });

  return new window.LVE.classes.LveJSObjectSession(this.__system__.world, this.name, r);

};