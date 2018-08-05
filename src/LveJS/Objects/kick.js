import each from './each';
import {
  removeArrayItem
} from '../Utils/array';


/**
 * 
 * @param {Array} t
 * @returns {Array}
 * @description 매개변수로 넘어온 배열에 있는 모든 문자열을 LveJSObject 객체로 치환하여 배열에 담습니다 
 */
function nameToObj(t) {

  let r;

  r = [];

  for (let u of t) {

    r = [...r, ...this.select(u)];

  }

  return r;

}

/**
 * 
 * @param {Array|undefined} a 
 */
export default function kick(a) {

  let s;
  let w;
  let h;

  w = this.__system__.world;

  each.call(this, function () {

    s = a;

    if (!s) {
      s = this.followset.follower;
    }

    s = nameToObj.call(w.hashTable, s);

    for (let t of s) {

      // 객체의 follower 목록에 해당 객체명이 존재하지 않을 경우 무시합니다
      if (this.followset.follower.indexOf(t.name) === -1) {
        continue;
      }

      removeArrayItem(this.followset.follower, t.name);

      t.followset.position = {};
      t.followset.following = null;

      this.emit('kick', {
        from: t
      });
      t.emit('kicked', {
        from: this
      });

    }

  });

  return this;

}