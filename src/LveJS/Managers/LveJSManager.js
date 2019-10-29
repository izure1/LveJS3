class LveJSManager {

  constructor() {
    this.inited = false
  }

  get isNotInited() {
    return !this.inited
  }

  init() {
    this.inited = true
  }

}


export default LveJSManager