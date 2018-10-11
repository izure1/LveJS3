export default function addEventListener(e, h, once = false) {

  if (!this.global[e]) {
    this.global[e] = new Map;
  }

  this.global[e].set(h, {
    once
  });

  return this;

};