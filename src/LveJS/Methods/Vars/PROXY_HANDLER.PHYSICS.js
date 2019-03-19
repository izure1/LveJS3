let handler


handler = {}
handler.__getter = {}
handler.__observer = null

handler.__getter.x = function (p, t) {
  return this.physics ? this.__system__.physics.body.GetLinearVelocity().get_x() : null
}

handler.__getter.y = function (p, t) {
  return this.physics ? this.__system__.physics.body.GetLinearVelocity().get_y() : null
}

handler.__getter.a = function (p, t) {
  return this.physics ? this.__system__.physics.body.GetAngularVelocity() : null
}

handler.x = function (p, v, t) {

  this.setLinearVelocity(v, this.physicsset.y)
  return v

}

handler.y = function (p, v, t) {

  this.setLinearVelocity(this.physicsset.x, v)
  return v

}

handler.a = function (p, v, t) {

  this.setAngularVelocity(v)
  return v

}

export default handler