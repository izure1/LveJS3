import getFixture from '../Helpers/getFixture'


export default function __setPhysicsBody() {

  if (this.__system__.physics.body) {
    return this
  }

  let w, h, x, y, r
  let F, B
  let R

  w = this.__system__.style.width
  h = this.__system__.style.height
  x = this.style.left
  y = this.style.bottom
  r = this.style.rotate

  F = getFixture.call(this)

  B = this.__system__.world.physics.createBody(this.physics, x, y, r)
  R = this.__system__.world.physics.createObject(this, B, F)

  this.__system__.physics.body = R
  this.__setPhysicsTransform(x, y, r)
  
  return this

}