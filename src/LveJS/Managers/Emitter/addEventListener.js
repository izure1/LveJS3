export default function addEventListener(e, h) {

  if (!this.global[e]) {
    this.global[e] = [];
  }

  this.global[e].push(h);

  return this;

};