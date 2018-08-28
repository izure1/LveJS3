export default function __setPhysicsBody() {

  if (this.__system__.physics.body) {
    return this.__system__.physics.body;
  }

  let w, h, x, y;
  let F, B;
  let r;

  w = this.__system__.style.width;
  h = this.__system__.style.height;
  x = this.style.left;
  y = this.style.bottom;

  F = this.__system__.world.physics.createFixture(this, w, h, this.density, this.friction, this.restitution);
  B = this.__system__.world.physics.createBody(this.physics, x, y);

  r = this.__system__.physics.body = this.__system__.world.physics.createObject(this, B, F);

  return r;

};