function getFixturePoint(v = 0.5, h = 1) {
  return (v / 0.5 - 1) * h
}


export default function getFixture() {

  let physics
  let w, h
  let ml, mr, mt, mb
  let x, y
  let s

  let F

  physics = this.__system__.world.physics

  w = this.__system__.style.width || 1
  h = this.__system__.style.height || 1
  x = this.__system__.style.fx
  y = this.__system__.style.fy
  s = this.__system__.style.scale

  ml = this.__system__.style.marginLeft || 0
  mr = this.__system__.style.marginRight || 0
  mt = this.__system__.style.marginTop || 0
  mb = this.__system__.style.marginBottom || 0

  if (isNaN(x)) x = 0.5
  if (isNaN(y)) y = 0.5
  if (isNaN(s)) s = 1

  w *= s
  h *= s

  ml *= s
  mr *= s
  mt *= s
  mb *= s

  x = getFixturePoint(x, w)
  y = getFixturePoint(y, h)

  F = physics.createFixture(this, w, h, this.density, this.friction, this.restitution, x, y, ml, mr, mt, mb)

  return F

}