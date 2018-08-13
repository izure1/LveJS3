/**
 * 
 * @param {Number} x Value
 * @param {Number} d Scale distance
 * @param {Number} g Gap
 */
function getScale(x, d, g) {
  return x * d / g;
}

/**
 * 
 * @param {Number} w Viewport width
 * @param {Number} h Viewport height
 * @param {Number} ax Target axis x
 * @param {Number} ay Target axis y
 * @param {Number} az Target axis z
 * @param {Number} bx Camera axis x
 * @param {Number} by Camera axis y
 * @param {Number} bz Camera axis z
 * @param {Number} d Scale distance
 * @returns {Object} x, y, scale
 */
function getPosition(w, h, ax, ay, az, bx, by, bz, d = 100) {

  let x, y, z;
  let s;
  x = ax - bx;
  y = ay - by;
  z = az - bz;

  x = getScale(x, d, z);
  y = getScale(y, d, z);

  x += w / 2;
  y += h / 2;
  y = h - y;

  s = d / z;

  return {
    x,
    y,
    s
  };

}


/**
 * 
 * @param {Number} w Viewport width
 * @param {Number} h Viewport height
 * @param {Number} x Camera axis x
 * @param {Number} y Camera axis y
 */
function getAABB(w, h, x, y) {

  y = h - y;

  return {
    x,
    y,
    s: 1
  };

}


export {
  getPosition,
  getAABB,
  getScale
};