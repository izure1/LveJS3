import each from './each';


export default function on(e, h) {

  let t;

  e = e.split(' ');
  each.call(this, function () {

    for (let p of e) {

      if (!(p in this.__system__.events)) {
        this.__system__.events[p] = [];
      }
  
      t = h.bind(this);
      this.__system__.events[p].push(t);

    }

  });

  return this;

};