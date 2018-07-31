'use strict';

class SuppressJob {

  constructor() {
    this.list = {};
  }

  isDoing(id) {
    return !!this.list[id];
  }

  setSuppress(id, complete, delay = 0) {
    clearTimeout(this.list[id]);
    this.list[id] = setTimeout(() => {
      complete();
      delete this.list[id];
    }, delay);
  }

  clearSuppress(id) {
    clearTimeout(this.list[id]);
    delete this.list[id];
  }

  reserve(id, complete) {
    this.list[id] = complete;
  }

  fire() {
    let t;
    for (let u in this.list) {
      t = this.list[u];
      if (t.call) {
        t();
        delete this.list[u];
      }
    }
  }

}

module.exports = SuppressJob;