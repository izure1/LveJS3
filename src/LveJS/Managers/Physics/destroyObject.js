/**
 * 
 * @param {*} B Body
 */
export default function destroyObject(B) {

  this.world.DestroyBody(B)
  this.bodies.delete(B)
  this.map.delete(B)

}