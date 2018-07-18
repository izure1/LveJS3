import TYPE from './Vars/TYPE.js';
import INIT_ATTRIBUTE from './Vars/INIT_ATTRIBUTE';
import INIT_STYLE from './Vars/INIT_STYLE';


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
  
  t = new LVE.classes.LveJSObject(this.name);
  t.attr('type', o.type).attr(v1).css(v2);

  w.hashTable.insert(this.name, t);

  return t;

};