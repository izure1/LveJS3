class LveJSCollider {

  constructor(a, b, cb, colliders) {
    this.a = a
    this.b = b
    this.callback = cb
    this.colliders = colliders
  }

  destroy() {
    return this.colliders.delete(this)
  }

}


export default LveJSCollider