import LveJSListener from './LveJSListener'

import addListener from './GlobalListener/addListener'
import removeListener from './GlobalListener/removeListener'


class LveJSGlobalListener extends LveJSListener {

  constructor() {
    super()
    this.element = window
  }

}