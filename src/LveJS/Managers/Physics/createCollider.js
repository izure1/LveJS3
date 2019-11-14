import LveJSCollider from '../../LveJSCollider'


export default function createCollider(a, b) {

  let collider = new LveJSCollider(a, b, this.colliders)
  this.colliders.add(collider)

  return collider

}