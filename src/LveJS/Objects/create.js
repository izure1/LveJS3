import TYPE from './Vars/TYPE.js';


export default function create(o = {}) {

  let t;
  let w;

  for (const t of this.context) {
    if (t.name !== this.name) continue;
    throw 'Already exist identifier Object. Use another name instead.';
  }

  for (const p in TYPE) {
    if (o[p]) continue;
    throw TYPE[p].message;
  }


  w = this.__system__.world;
  t = new LVE.classes.LveJSObject(this.name);

  w.hashTable.insert(this.name, t);

  return t;

};