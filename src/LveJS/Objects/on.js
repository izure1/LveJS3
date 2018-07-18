import each from './each';


export default function on(e, h) {

  let t;
  each.call(this, function () {

    if (!(e in this.__system__.events)) {
      this.__system__.events[e] = [];
    }

    t = h.bind(this);
    this.__system__.events[e].push(t);

  });

  return this;

};