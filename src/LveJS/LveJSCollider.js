class LveJSCollider {

  constructor(a, b, manager) {
    this.a = a
    this.b = b
    this.playing = true
    this.manager = manager
  }

  destroy() {
    return this.manager.delete(this)
  }

  play() {
    this.playing = true
    return this
  }

  pause() {
    this.playing = false
    return this
  }

}


export default LveJSCollider