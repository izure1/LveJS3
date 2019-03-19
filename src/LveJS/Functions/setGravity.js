export default function setGravity(x, y) {

  let B

  B = this.physics.box2d
  this.physics.world.SetGravity(new B.b2Vec2(x, y))

  return this.lve

}