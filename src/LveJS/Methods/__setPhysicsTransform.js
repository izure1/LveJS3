import {
  degToRad
} from '../Utils/math'


export default function __setPhysicsTansform(x, y, r) {

  this.__system__.world.physics.onUpdate(() => {

    let B = this.__system__.world.physics.box2d
    let S = this.__system__.world.physics.setting.unitScale

    if (!this.__system__.physics.body) {
      return this
    }

    if (this.__system__.physics.force) {

      x /= S
      y /= S
      r = degToRad(r)
      if (
        isNaN(x) ||
        isNaN(y) ||
        isNaN(r)
      ) return

      this.__system__.physics.body.SetTransform(new B.b2Vec2(x, y), r)

    }

  })

  return this

}