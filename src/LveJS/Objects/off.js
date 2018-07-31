import each from './each';
import {
  removeArrayItem
} from '../Utils/array';


export default function off(e, h = null) {

  let t;
  let r;

  each.call(this, function () {

    t = this.__system__.events;
    r = e ? e.split(' ') : Object.keys(t);

    for (let p of r) {

      if (!(p in t)) {
        return;
      }

      if (h === null) t[p] = [];
      else {
        removeArrayItem(t[p], h);
      }

    }

  });

  return this;

};