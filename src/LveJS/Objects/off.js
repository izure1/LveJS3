import each from './each';


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

      if (h === null) t[p] = new Map;
      else {
        t[p].delete(h);
      }

    }

  });

  return this;

};