import each from './each'



/**
 * 
 * @param {Number} v Impulse
 */
export default function applyAngularImpulse(v) {

  let s

  s = this.__system__.world.physics.setting.unitScale
  v /= s

  each.call(this, function () {

    if (!this.__system__.physics.body) return

    this.__system__.physics.body.ApplyAngularImpulse(v)

  })

  return this

}