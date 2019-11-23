export default function __setPhysicsFreeze(r) {

  let t
  let B

  t = this.__system__.physics.body
  B = this.__system__.world.physics.box2d

  if (!t) {
    return this
  }

  r = !!r ? B.b2_staticBody : this.__system__.physics.type
  t.SetType(r)

  return this

}