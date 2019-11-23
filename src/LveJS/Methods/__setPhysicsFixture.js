import getFixture from '../Helpers/getFixture'


export default function __setPhysicsFixture() {

  if (!this.__system__.physics.body) {
    return this
  }

  let B = this.__system__.physics.body
  let {
    F,
    V
  } = getFixture.call(this)

  B.DestroyFixture(B.GetFixtureList())
  B.ClearTrash()
  B.CreateFixture(F)
  B.__vector__ = V

  this.__setPhysicsDensity(this.density)

  return this

}