import setHiddenContext from '../Utils/setHiddenContext';

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
  let B;

  for (const t of this.context) {
    if (t.name !== this.name) continue;
    throw 'Already exist identifier Object. Use another name instead.';
  }

  for (const p in TYPE) {
    if (o[p]) continue;
    throw TYPE[p].message;
  }


  v1 = new INIT_ATTRIBUTE;
  v2 = new INIT_STYLE;
  v1 = v1[o.type] || {};
  v2 = v2[o.type] || {};

  w = this.__system__.world;
  B = w.physics.box2d;

  // 객체 속성을 정의합니다
  t = new LVE.classes.LveJSObject(w, this.name);

  t.attr(v1).__setElementEvent();
  t.attr(o).css(v2).css(t.css()).sprite(t.sprite());

  w.hashTable.insert(this.name, t);
  w.lve.requestCaching();

  t.attr('physics', t.physics).emit('create');

  return t;

};