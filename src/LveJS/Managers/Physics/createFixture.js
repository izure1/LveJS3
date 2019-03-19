const MINSIZE = 0.001

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
 */
export default function createFixture(t, w = 1, h = 1, d = 1, f = 1, r = 0, x = 0, y = 0) {

  let s
  let B
  let F, S

  s = this.setting.unitScale
  B = this.box2d
  F = new B.b2FixtureDef
  S = new B.b2PolygonShape

  F.set_density(d)
  F.set_friction(f)
  F.set_restitution(r)
  F.set_shape(S)

  w /= 2
  h /= 2
  w /= s
  h /= s

  x /= 2
  y /= 2
  x /= s
  y /= s

  if (w < MINSIZE) w = MINSIZE
  if (h < MINSIZE) h = MINSIZE

  S.SetAsBox(w, h, new B.b2Vec2(x, y), 0)

  return F

}