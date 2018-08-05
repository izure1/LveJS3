import instanceOf from '../Functions/instanceof';


export default function from(t) {

  let w;
  let r;
  let o;

  w = this.__system__.world;

  if (instanceOf(t)) {

    t = t.get();

  } else {

    t = w.hashTable.select(t);
    t = t[0];

  }

  if (!t) {
    return this;
  }


  o = JSON.parse(JSON.stringify(t));

  delete o.context;
  delete o.name;

  if (t.element instanceof HTMLElement) {
    o.element = t.element.cloneNode(true);
  }

  r = w.lve(this.name).create(o);

  return r;

};