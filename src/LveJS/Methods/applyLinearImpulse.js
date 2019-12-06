import each from './each'



/**
 * 
 * @param {Number} x Vector X axis
 * @param {Number} y Vector Y axis
 */
export default function applyLinearImpulse(x, y) {

  let B, V
  let s
  let ml, mb

  s = this.__system__.world.physics.setting.unitScale
  ml = this.__system__.style.marginLeft
  mb = this.__system__.style.marginBottom

  x += ml
  y += mb
  x /= s
  y /= s

  B = this.__system__.world.physics.box2d
  V = new B.b2Vec2(x, y)

  each.call(this, function () {

    this.__system__.world.physics.onUpdate(() => {

      if (!this.__system__.physics.body) return
      this.__system__.physics.body.ApplyLinearImpulse(V)

    })

  })

  return this

}