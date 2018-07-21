export default function getProperties() {

  let r;

  r = {};

  for (let p in this) {
    r[p] = this[p];
  }

  return r;

};