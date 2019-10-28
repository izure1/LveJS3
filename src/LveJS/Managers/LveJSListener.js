class LveJSListener {

  constructor() {

    this.inited = false
    this.handler = new Map
    this.element = null
    this.destroyCallback = null

  }

  init(element = null) {

    this.inited = true
    this.element = element

  }

  destroy() {

    if (typeof this.clean === 'function') {

      let entries

      entries = this.handler.entries()
      entries = Array.from(entries)

      this.clean(entries)

    }

    this.handler.clear()
    this.element = null

  }

  get isNotInited() {
    return !this.inited
  }

}


export default LveJSListener