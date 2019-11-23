class WaitReady {

  constructor() {
    this.callbacks = new Set
    this.ready = false
  }

  init() {
    this.ready = false
    this.callbacks = new Set
  }

  wait(callback) {

    if (this.ready) {
      callback()
      return
    }

    this.callbacks.add(callback)

  }

  done() {

    if (this.ready) {
      return
    }

    this.ready = true
    this.callbacks.forEach(callback => {
      callback()
      this.callbacks.delete(callback)
    })

  }

}


export default WaitReady