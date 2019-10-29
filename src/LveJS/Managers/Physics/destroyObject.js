/**
 * 
 * @param {*} B Body
 */
export default function destroyObject(B) {

  B.DestroyFixture(B.GetFixtureList())
  B.ClearTrash()
  
  this.world.DestroyBody(B)
  this.bodies.delete(B)
  this.map.delete(B)

}