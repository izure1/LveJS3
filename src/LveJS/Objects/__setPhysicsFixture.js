export default function __setPhysicsFixture() {

  if (!this.__system__.physics.body) {
    return this.__setPhysicsBody();
  }

  let w, h;
  let F, B;

  w = this.__system__.style.width;
  h = this.__system__.style.height;

  B = this.__system__.physics.body;
  F = this.__system__.world.physics.createFixture(this, w, h, this.density, this.friction, this.restitution);

  B.DestroyFixture(B.GetFixtureList());
  B.CreateFixture(F);

  return B;

};