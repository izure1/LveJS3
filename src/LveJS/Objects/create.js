import TYPE from './Vars/TYPE.js';
import INIT_ATTRIBUTE from './Vars/INIT_ATTRIBUTE.js';
import INIT_STYLE from './Vars/INIT_STYLE.js';


/**
 * 
 * @param {Object} o Object properties
 */
export default function create(o = {}) {

  let t;
  let w;
  let v1, v2;

  for (const t of this.context) {
    if (t.name !== this.name) continue;
    throw 'Already exist identifier Object. Use another name instead.';
  }

  for (const p in TYPE) {
    if (o[p]) continue;
    throw TYPE[p].message;
  }


  v1 = INIT_ATTRIBUTE[o.type] || {};
  v2 = INIT_STYLE[o.type] || {};

  w = this.__system__.world;

  t = new LVE.classes.LveJSObject(w, this.name);
  t.attr(v1).attr(o).css(v2).css(t.css());

  w.hashTable.insert(this.name, t);
  w.lve.requestCaching();

  return t;

};