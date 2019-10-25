import LveJSCollider from '../../LveJSCollider'


export default function createCollider(a, b, cb) {

  let collider = new LveJSCollider(a, b, cb, this.colliders)
  this.colliders.add(collider)

  return collider

}