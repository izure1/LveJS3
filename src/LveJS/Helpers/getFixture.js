import DEFAULT_STYLE from '../Methods/Vars/DEFAULT_STYLE'


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


  let {
    width,
    height,
    scale,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom
  } = new DEFAULT_STYLE

  if (isNaN(w)) w = width
  if (isNaN(h)) h = height
  if (isNaN(s)) s = scale
  if (isNaN(x)) x = 0.5
  if (isNaN(y)) y = 0.5

  if (isNaN(ml)) ml = marginLeft
  if (isNaN(mr)) mr = marginRight
  if (isNaN(mt)) mt = marginTop
  if (isNaN(mb)) mb = marginBottom

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