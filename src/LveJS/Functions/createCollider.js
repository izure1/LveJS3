/**
 * 
 * @param {String} a  Class name
 * @param {String} b  Class name
 * @param {Function} cb  Callback function when object collided
 * @description
 * Create physical conflicts between objects with a given class
 */
export default function createCollider(a, b, cb = function () {}) {

  let len = arguments.length

  if (len === 1) b = a
  else if (len === 2) {

    if (typeof b === 'function') {
      cb = b
      b = a
    }

  }

  cb = cb.bind(this.lve)

  return this.physics.createCollider(a, b, cb)

}