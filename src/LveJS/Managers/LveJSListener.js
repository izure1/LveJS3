import LveJSManager from './LveJSManager'


class LveJSListener extends LveJSManager {

  constructor() {

    super()
    this.handler = new Map
    this.element = null
    this.destroyCallback = null

  }

  initElement(element = null) {

    this.init()
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

}


export default LveJSListener