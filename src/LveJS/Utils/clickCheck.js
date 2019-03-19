/*
 *  https://joshuawoehlke.com/detecting-clicks-rotated-rectangles/
 */

 

/**
 * Find point after rotation around another point by X degrees
 *
 * @param {Array} point The point to be rotated [X,Y]
 * @param {Array} rotationCenterPoint The point that should be rotated around [X,Y]
 * @param {Number} degrees The degrees to rotate the point
 * @return {Array} Returns point after rotation [X,Y]
 */
function rotatePoint(point, rotationCenterPoint, degrees) {
  // Using radians for this formula
  let radians = degrees * Math.PI / 180

  // Translate the plane on which rotation is occurring.
  // We want to rotate around 0,0. We'll add these back later.
  point[0] -= rotationCenterPoint[0]
  point[1] -= rotationCenterPoint[1]

  // Perform the rotation
  let newPoint = []
  newPoint[0] = point[0] * Math.cos(radians) - point[1] * Math.sin(radians)
  newPoint[1] = point[0] * Math.sin(radians) + point[1] * Math.cos(radians)

  // Translate the plane back to where it was.
  newPoint[0] += rotationCenterPoint[0]
  newPoint[1] += rotationCenterPoint[1]

  return newPoint
}


/**
 * Find the vertices of a rotating rectangle
 *
 * @param {Array} position From left, top [X,Y]
 * @param {Array} size Lengths [X,Y]
 * @param {Array} center Rect rotate center position [X,Y]
 * @param {Number} degrees Degrees rotated around center
 * @return {Object} Arrays LT, RT, RB, LB [X,Y]
 */
function findRectVertices(position, size, center, degrees) {
  let left = position[0]
  let right = position[0] + size[0]
  let top = position[1]
  let bottom = position[1] + size[1]

  let LT = [left, top]
  let RT = [right, top]
  let RB = [right, bottom]
  let LB = [left, bottom]

  return {
    LT: rotatePoint(LT, center, degrees),
    RT: rotatePoint(RT, center, degrees),
    RB: rotatePoint(RB, center, degrees),
    LB: rotatePoint(LB, center, degrees)
  }
}


/**
 * Distance formula
 *
 * @param {Array} p1 First point [X,Y]
 * @param {Array} p2 Second point [X,Y]
 * @return {Number} Returns distance between points
 */
function distance(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2))
}


/**
 * Heron's formula (triangle area)
 *
 * @param {Number} d1 Distance, side 1
 * @param {Number} d2 Distance, side 2
 * @param {Number} d3 Distance, side 3
 * @return {Number} Returns area of triangle
 */
function triangleArea(d1, d2, d3) {
  // See https://en.wikipedia.org/wiki/Heron's_formula
  let s = (d1 + d2 + d3) / 2
  return Math.sqrt(s * (s - d1) * (s - d2) * (s - d3))
}


/**
 * Determine if a click hit a rotated rectangle
 *
 * @param {Array} click Click position [X,Y]
 * @param {Array} position Rect from left, top [X,Y]
 * @param {Array} size Rect size as lengths [X,Y]
 * @param {Array} center Rect rotate center position [X,Y]
 * @param {Number} degrees Degrees rotated around center
 * @return {Boolean} Returns true if hit, false if miss
 */
function clickCheck(click, position, size, center, degrees) {
  // Find the area of the rectangle
  // Round to avoid small JS math differences
  let rectArea = Math.round(size[0] * size[1])

  // Find the vertices
  let vertices = findRectVertices(position, size, center, degrees)

  // Create an array of the areas of the four triangles
  let triArea = [
    // Click, LT, RT
    triangleArea(
      distance(click, vertices.LT),
      distance(vertices.LT, vertices.RT),
      distance(vertices.RT, click)
    ),
    // Click, RT, RB
    triangleArea(
      distance(click, vertices.RT),
      distance(vertices.RT, vertices.RB),
      distance(vertices.RB, click)
    ),
    // Click, RB, LB
    triangleArea(
      distance(click, vertices.RB),
      distance(vertices.RB, vertices.LB),
      distance(vertices.LB, click)
    ),
    // Click, LB, LT
    triangleArea(
      distance(click, vertices.LB),
      distance(vertices.LB, vertices.LT),
      distance(vertices.LT, click)
    )
  ]

  // Reduce this array with a sum function
  // Round to avoid small JS math differences
  triArea = Math.round(triArea.reduce(function (a, b) {
    return a + b
  }, 0))

  // Finally do that simple thing we visualized earlier
  if (triArea <= rectArea) {
    return true
  }
  return false
}


export default clickCheck