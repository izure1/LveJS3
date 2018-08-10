'use strict';



function DeltaTimer() {

  this.start = null;
  this.before = null;
  this.current = null;
  this.paused = false;
  this.delta = 0;

}

DeltaTimer.prototype.init = function () {
  this.start = performance.now();
  this.before = performance.now();
  this.current = performance.now();
};

/**
 * @description
 * Update tick time. It's returns interval of tick time with before.
 * 
 * @returns {Number}
 */
DeltaTimer.prototype.update = function () {

  this.before = this.current;
  this.current = performance.now();
  this.delta += this.current - this.before;

  return this.delta;

};

DeltaTimer.prototype.uptime = function () {
  return this.current - this.start;
};

DeltaTimer.prototype.clear = function () {
  this.delta = 0;
};

DeltaTimer.prototype.pause = function () {
  this.paused = true;
};

DeltaTimer.prototype.play = function () {
  this.paused = false;
};

DeltaTimer.prototype.check = function (fps) {

  return ~~this.delta >= ~~(1000 / fps) - 1;

};

DeltaTimer.prototype.checkAndClear = function (fps) {

  let r;

  if (r = this.check(fps)) {
    this.clear();
  }

  return r;

};


export default DeltaTimer;