export default function __setPhysicsBody() {

  if (this.__system__.physics.body) {
    return this.__system__.world.physics.body;
  }

  let B;
  let w, h;
  let x, y;

  B = this.__system__.world.box2d;

  w = this.__system__.style.width;
  h = this.__system__.style.height;

  w /= 2;
  h /= 2;

  x = this.style.left;
  y = this.style.bottom;

  let oB, oF, oS, t;

  oB = B.b2BodyDef();
  oF = B.b2FixtureDef();
  oS = B.b2PolygonShape();

  oF.set_density(this.density);
  oF.set_friction(this.friction);
  oF.set_restitution(this.restitution);
  oF.set_shape(oS);

  oS.SetAsBox(w, h, new B.b2Vec2(0, h), 0);

  oB.set_type(B.b2_dynamicBody);
  oB.set_position(new B.b2Vec2(x, y));

  t = this.__system__.world.physics.CreateBody(oB);
  t.CreateFixture(oF);

  return t;

};