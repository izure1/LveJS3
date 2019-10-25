/**
 * @description
 * Returns the gravity information of the world
 * @returns {Object} x, y
 */
export default function getGravity() {

  let gravity
  let x, y

  gravity = this.physics.world.GetGravity()
  x = gravity.get_x()
  y = gravity.get_y()

  return {
    x,
    y
  }

}