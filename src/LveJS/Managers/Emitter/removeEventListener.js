export default function removeEventListener(e, h) {

  if (!(e in this.global)) {
    return this;
  }

  this.global[e].delete(h);

  return this;

};