import getFixture from '../Helpers/getFixture'


export default function __setPhysicsBody(bodyType) {

  this.__system__.world.physics.onUpdate(() => {

    if (this.__system__.physics.body) {
      return this
    }

    let x, y, r
    let B
    let R

    x = this.style.left
    y = this.style.bottom
    r = this.style.rotate

    let {
      F,
      V
    } = getFixture.call(this)

    B = this.__system__.world.physics.createBody(this.physics, x, y, r)
    R = this.__system__.world.physics.createObject(this, B, F)

    R.__vector__ = V
    R.ClearTrash = function () {

      // Clear vector trash in shape
      if (!R.__vector__) return

      R.__vector__.__destroy__()
      R.__vector__ = null

    }

    R.SetType(bodyType)
    this.__system__.physics.type = bodyType
    this.__system__.physics.body = R

    this.__setPhysicsTransform(x, y, r)

  })

  return this

}