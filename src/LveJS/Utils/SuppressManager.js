'use strict';

class SuppressManager {

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

}

module.exports = SuppressManager;