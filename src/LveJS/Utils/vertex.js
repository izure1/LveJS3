/**
 * 
 * @param {Number} x Value
 * @param {Number} d Scale distance
 * @param {Number} g Gap
 */
function getScale(x, d, g) {
  return x * d / g
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
 * @param {Number} cs Canvas scale
 * @returns {Object} x, y, scale
 */
function getPosition(w, h, ax, ay, az, bx, by, bz, d = 100, cs = 1) {

  let x, y, z
  let s

  d *= cs
  x = ax - bx
  y = ay - by
  z = az - bz || 1

  x = getScale(x, d, z)
  y = getScale(y, d, z)

  x += w / 2
  y += h / 2
  y = h - y

  s = d / z

  return {
    x,
    y,
    s
  }

}


/**
 * 
 * @param {Number} w Viewport width
 * @param {Number} h Viewport height
 * @param {Number} x Target axis x
 * @param {Number} y Target axis y
 */
function getAABB(w, h, x, y, z, cx, cy, cz, d = 100, cs = 1) {

  x *= cs
  y *= cs

  y = h - y

  return {
    x,
    y,
    s: cs
  }

}


export {
  getPosition,
  getAABB,
  getScale
}