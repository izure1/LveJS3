'use strict';

function radToDeg(r) {
  return r / Math.PI * 180;
}

function degToRad(d) {
  return d * Math.PI / 180;
}

export {
  radToDeg,
  degToRad
};