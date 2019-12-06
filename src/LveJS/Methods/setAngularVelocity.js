import each from './each'



/**
 * 
 * @param {Number} v Impulse
 */
export default function setLinearVelocity(v) {

  let s

  s = this.__system__.world.physics.setting.unitScale
  v /= s

  each.call(this, function () {

    this.__system__.world.physics.onUpdate(() => {

      if (!this.__system__.physics.body) return
      this.__system__.physics.body.SetAngularVelocity(v)

    })

  })

  return this

}