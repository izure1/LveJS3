export default function copyObject(v) {

  let r;

  // HTML Element
  if (v instanceof HTMLElement) {
    return v.cloneNode(true);
  }

  // LveJSObject or Session
  if (
    v instanceof window.LVE.classes.LveJSObjectSession ||
    v instanceof window.LVE.classes.LveJSObject
  ) {
    return v;
  }

  // Array or Object
  if (typeof v === 'object') {

    let c;

    if (Array.isArray(v)) r = [];
    else r = {};

    for (let p in v) {

      c = v[p];

      if (typeof c !== 'object') r[p] = c;
      else {
        r[p] = copyObject(c);
      }

    }

    return r;

  }

  return v;

};