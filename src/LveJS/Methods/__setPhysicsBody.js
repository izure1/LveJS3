import getFixture from '../Helpers/getFixture'


export default function __setPhysicsBody(bodyType) {

  this.__system__.world.physics.onUpdate(() => {

    if (this.__system__.physics.body) {
      return this
    }

    let {
      F,
      V
    } = getFixture.call(this)

    
    let B = this.__system__.world.physics.createBody(this.physics)
    let R = this.__system__.world.physics.createObject(this, B, F)

    R.__vector__ = V
    R.SetType(bodyType)
    R.ClearTrash = function () {

      // Clear vector trash in shape
      if (!R.__vector__) return

      R.__vector__.__destroy__()
      R.__vector__ = null

    }

    
    this.__system__.physics.type = bodyType
    this.__system__.physics.body = R

    this.__setPhysicsTransform(this.style.left, this.style.bottom, this.style.rotate)

  })

  return this

}