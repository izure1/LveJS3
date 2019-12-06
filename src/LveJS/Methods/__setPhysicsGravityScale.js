export default function __setPhysicsGravityScale(v) {

  this.__system__.world.physics.onUpdate(() => {

    if (!this.__system__.physics.body) return
    this.__system__.physics.body.SetGravityScale(v)

  })

  return this

}