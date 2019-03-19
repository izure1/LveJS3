export default function getLinearVelocity() {

  let t

  t = this.get()
  t = t.__system__.physics.body

  if (!t) {
    return 0
  }

  return t.GetAngularVelocity()

}