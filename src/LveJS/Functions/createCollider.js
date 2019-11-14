/**
 * 
 * @param {String} a  Class name
 * @param {String} b  Class name
 * @description
 * Create physical conflicts between objects with a given class
 */
export default function createCollider(a, b = a) {

  return this.physics.createCollider(a, b)

}