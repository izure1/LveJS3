import each from './each'



/**
 * 
 * @param {Number} x Vector X axis
 * @param {Number} y Vector Y axis
 */
export default function applyLinearImpulse(x, y) {

  let B, V
  let s

  s = this.__system__.world.physics.setting.unitScale

  x /= s
  y /= s

  B = this.__system__.world.physics.box2d
  V = new B.b2Vec2(x, y)

  each.call(this, function () {

    if (!this.__system__.physics.body) return

    this.__system__.physics.body.ApplyLinearImpulse(V)

  })

  return this

}