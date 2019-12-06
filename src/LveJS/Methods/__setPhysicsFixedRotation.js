export default function __setPhysicsFixedRotation(v) {

  this.__system__.world.physics.onUpdate(() => {

    if (!this.__system__.physics.body) return
    this.__system__.physics.body.SetFixedRotation(v)

  })

  return this

}