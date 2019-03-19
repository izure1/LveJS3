import {
  degToRad
} from '../Utils/math'


export default function __setPhysicsTansform(x, y, r) {

  let B, S

  B = this.__system__.world.physics.box2d
  S = this.__system__.world.physics.setting.unitScale


  if (!this.__system__.physics.body) {
    return this
  }

  if (this.__system__.physics.force) {

    this.__system__.physics.body.SetAwake(true)
    this.__system__.physics.body.SetTransform(new B.b2Vec2(x / S, y / S), degToRad(r))

  }

  return this

}