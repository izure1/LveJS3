/**
 * 
 * @param {Number} x Value
 * @param {Number} s Scale distance
 * @param {Number} g Gap
 */
function getScale(x, s, g) {
  return x * s / g;
}

/**
 * 
 * @param {Number} w Viewport width
 * @param {Number} h Viewport height
 * @param {Number} ax Camera axis x
 * @param {Number} ay Camera axis y
 * @param {Number} az Camera axis z
 * @param {Number} bx Target axis x
 * @param {Number} by Target axis y
 * @param {Number} bz Target axis z
 * @param {Number} s Scale distance
 * @returns {Object} x, y, scale
 */
function getPosition(w, h, ax, ay, az, bx, by, bz, s = 100) {

  let x, y, z;
  let scale;
  x = bx - ax;
  y = by - ay;
  z = bz - az;

  x = getScale(x, s, z);
  y = getScale(y, s, z);

  x += w / 2;
  y += h / 2;
  y = h - y;

  scale = s / z;
  
  return {
    x, y, scale
  }

}


export {
  getPosition,
  getScale
};