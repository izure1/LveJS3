export default function __setPhysicsRestitution(v) {

  this.__system__.world.physics.onUpdate(() => {

    if (!this.__system__.physics.body) return
    this.__system__.physics.body.GetFixtureList().SetRestitution(v)

  })

  return this

}