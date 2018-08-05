export default function __followUpdate(t) {

  let pos, x, y, z;
  let {
    left,
    bottom,
    perspective
  } = t.style;

  pos = this.followset.position;

  x = pos.left || 0;
  y = pos.bottom || 0;
  z = pos.perspective || 0;

  this.style.left = left + x;
  this.style.bottom = bottom + y;
  this.style.perspective = perspective + z;

  return this;

};