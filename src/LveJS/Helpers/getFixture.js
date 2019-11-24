function getFixturePoint(v = 0.5, h = 1) {
  return (v / 0.5 - 1) * h
}


export default function getFixture() {

  let physics
  let w, h
  let ml, mr, mt, mb
  let x, y
  let s

  physics = this.__system__.world.physics

  w = this.__system__.style.width
  h = this.__system__.style.height
  x = this.__system__.style.fx
  y = this.__system__.style.fy
  s = this.__system__.style.scale

  ml = this.__system__.style.marginLeft
  mr = this.__system__.style.marginRight
  mt = this.__system__.style.marginTop
  mb = this.__system__.style.marginBottom

  if (isNaN(w)) w = 1
  if (isNaN(h)) h = 1
  if (isNaN(x)) x = 0.5
  if (isNaN(y)) y = 0.5
  if (isNaN(s)) s = 1

  if (isNaN(ml)) ml = 0
  if (isNaN(mr)) mr = 0
  if (isNaN(mt)) mt = 0
  if (isNaN(mb)) mb = 0

  w *= s
  h *= s

  ml *= s
  mr *= s
  mt *= s
  mb *= s

  x = getFixturePoint(x, w)
  y = getFixturePoint(y, h)

  return physics.createFixture(this, w, h, this.density, this.friction, this.restitution, x, y, ml, mr, mt, mb)

}