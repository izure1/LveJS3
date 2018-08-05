import instanceOf from '../Functions/instanceof';


export default function copyObject(v, f = {}) {

  let r;

  // HTML Element
  if (v instanceof HTMLElement) {
    return v.cloneNode(true);
  }

  // Array or Object
  if (typeof v === 'object') {

    let c;

    if (Array.isArray(v)) r = [];
    else r = {};

    for (let p in v) {

      if (p in f) {
        r[p] = f[p];
        continue;
      }

      c = v[p];

      if (typeof c !== 'object') r[p] = c;
      else if (!instanceOf(v)) {
        r[p] = copyObject(c, f);
      }

    }

    return r;

  }

  return v;

};