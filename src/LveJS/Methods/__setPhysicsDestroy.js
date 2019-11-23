export default function __setPhysicsDestroy() {

  this.__system__.ready.physics.done()

  let B

  B = this.__system__.physics.body

  if (!B) {
    return this
  }

  this.__system__.world.physics.bodies.add(B)
  this.__system__.physics.body = null
  
  delete this.__system__.physics.body

  return this

}