export default function __setPhysicsFixture() {

  let testF, testS;

  testF = new B.b2FixtureDef();
  testS = new B.b2PolygonShape();

  testF.set_density(1);
  testF.set_friction(1);
  testF.set_restitution(0.3);
  testF.set_shape(testS);

  testS.SetAsBox(100, 100, new B.b2Vec2(0, 100), 0);

  return testF;

};