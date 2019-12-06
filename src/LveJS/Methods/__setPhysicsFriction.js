export default function __setPhysicsFriction(v) {

  this.__system__.world.physics.onUpdate(() => {

    if (!this.__system__.physics.body) return
    this.__system__.physics.body.GetFixtureList().SetFriction(v)

  })

  return this

}