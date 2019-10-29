const MINSIZE = 0.001
let FixtureDef = null
let ShapeDef = null
let VectorDef = null

function getFixtureDef(B) {

  if (!FixtureDef) {
    FixtureDef = new B.b2FixtureDef
  }

  return FixtureDef

}

function getShapeDef(B) {

  if (!ShapeDef) {
    ShapeDef = new B.b2PolygonShape
  }

  return ShapeDef

}

/**
 * 
 * @param {String} t Shape type (square, circle)
 * @param {Number} w Shape width
 * @param {Number} h Shape height
 * @param {Number} d Fixture density
 * @param {Number} f Fixture friction
 * @param {Number} r Fixture restitution
 * @param {Number} x Fixture standard point X axis
 * @param {Number} y Fixture standard point Y axis
 * @param {Number} ml Margin left
 * @param {Number} mr Margin right
 * @param {Number} mt Margin top
 * @param {Number} mb Margin bottom
 * 
 */
export default function createFixture(t, w = 1, h = 1, d = 1, f = 1, r = 0, x = 0, y = 0, ml = 0, mr = 0, mt = 0, mb = 0) {

  let s
  let B
  let F, S, V

  s = this.setting.unitScale
  B = this.box2d

  F = getFixtureDef(B)
  S = getShapeDef(B)

  F.set_density(d)
  F.set_friction(f)
  F.set_restitution(r)
  F.set_shape(S)

  w /= 2
  h /= 2
  ml /= 2
  mr /= 2
  mt /= 2
  mb /= 2

  w /= s
  h /= s

  ml /= s
  mr /= s
  mt /= s
  mb /= s

  x /= 2
  y /= 2
  x /= s
  y /= s

  if (w < MINSIZE) w = MINSIZE
  if (h < MINSIZE) h = MINSIZE


  V = new B.b2Vec2(x + mr - ml, y + mt - mb)
  S.SetAsBox(w + ml + mr, h + mt + mb, V, 0)

  return {
    V,
    F
  }

}