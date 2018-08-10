/**
 * 
 * @param {Box2D} B 
 * @param {String} t Shape type
 * @param {Number} w Shape width
 * @param {Number} h Shape height
 * @param {Number} d Fixture density
 * @param {Number} f Fixture friction
 * @param {Number} r Fixture restitution
 */
export default function createPhysicsFixture(B, t, w, h, d = 1, f = 1, r = 0.3) {

  let F, S;

  F = new B.b2FixtureDef();
  S = new B.b2PolygonShape();

  F.set_density(d);
  F.set_friction(f);
  F.set_restitution(r);
  F.set_shape(S);

  w /= 2;
  h /= 2;

  S.SetAsBox(w, h, new B.b2Vec2(0, 100), 0);

  return F;

};