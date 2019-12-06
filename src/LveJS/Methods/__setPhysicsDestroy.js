export default function __setPhysicsDestroy() {

  this.__system__.ready.physics.done()
  this.__system__.world.physics.onUpdate(() => {

    let B

    B = this.__system__.physics.body
    if (!B) return this

    this.__system__.world.physics.destroyObject(B)
    delete this.__system__.physics.body

  })

  return this

}