export default function start(f) {

  if (this.cache.inited) {
    f.call(this, this);
    return this.lve;
  }

  this.queue.push(f);
  return this.lve;

};