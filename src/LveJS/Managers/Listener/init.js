export default function init(c, f) {

  if (this.inited) {
    return this;
  }

  this.canvas = c;
  this.worldQuery = f;
  this.inited = true;

  return this;

};