import each from './each'



/**
 * 
 * @param {Number} v Gravity scale
 */
export default function getPhysicsBody(v) {

  return this.get().__system__.physics.body

}