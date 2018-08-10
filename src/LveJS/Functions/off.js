import {
  removeArrayItem
} from '../Utils/array';

export default function off(e, h = null) {

  let t;
  let r;

  t = this.events;
  r = e ? e.split(' ') : Object.keys(t);

  for (let p of r) {

    if (!(p in t)) {
      return this.lve;
    }

    if (h === null) t[p] = [];
    else {
      removeArrayItem(t[p], h);
    }

  }

  return this.lve;

};