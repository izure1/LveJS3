export default function __followUpdate(p, v) {
  
  let t;

  t = this.followset.position[p];

  if (!t) {
    return this;
  }

  this.style[p] = t + v;
  return this;

};