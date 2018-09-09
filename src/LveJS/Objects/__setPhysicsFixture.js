import getFixture from '../Helpers/getFixture';


export default function __setPhysicsFixture() {

  if (!this.__system__.physics.body) {
    return this;
  }

  let F, B;

  B = this.__system__.physics.body;
  F = getFixture.call(this);

  B.DestroyFixture(B.GetFixtureList());
  B.CreateFixture(F);

  return this;

};