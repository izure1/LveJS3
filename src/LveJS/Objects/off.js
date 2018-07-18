import each from './each';
import {
  removeArrayItem
} from '../Utils/array';


export default function off(e, h = null) {

  let t;
  each.call(this, function () {

    t = this.__system__.events;

    if (!(e in t)) {
      return;
    }

    if (h === null) t[e] = [];
    else {
      removeArrayItem(t[e], h);
    }

  });

  return this;

};