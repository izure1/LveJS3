export default function getLinearVelocity() {

  let t
  let r

  t = this.get()
  t = t.__system__.physics.body

  r = {
    x: 0,
    y: 0
  }

  if (!t) {
    return r
  }

  t = t.GetLinearVelocity()
  r.x = t.get_x()
  r.y = t.get_y()

  return r

}