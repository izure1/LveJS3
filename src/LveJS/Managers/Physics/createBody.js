/**
 * 
 * @param {String} t Body Type (static, dynamic)
 * @param {Number} x Body X axis
 * @param {Number} y Body Y axis
 */
export default function createBody(t, x = 0, y = 0) {

  let B
  let r, pos, s

  B = this.box2d
  s = this.setting.unitScale
  x /= s
  y /= s

  r = new B.b2BodyDef
  pos = new B.b2Vec2(x, y)

  switch (t) {

    case 'static':
      t = B.b2_staticBody
      break

    case 'dynamic':
      t = B.b2_dynamicBody
      break

    default:
      t = B.b2_dynamicBody
      break

  }

  r.set_type(t)
  r.set_position(pos)

  return r

}