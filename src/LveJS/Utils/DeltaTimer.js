'use strict';



function DeltaTimer() {

  this.start = null;
  this.before = null;
  this.current = null;
  this.paused = false;

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

  return this.current - this.before;

};

DeltaTimer.prototype.uptime = function () {
  return this.current - this.start;
};


export default DeltaTimer;