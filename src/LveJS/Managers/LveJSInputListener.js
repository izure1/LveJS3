import LveJSElementListener from './LveJSElementListener'

import initKeys from './InputListener/initKeys'
import setKey from './InputListener/setKey'
import pressKey from './InputListener/pressKey'
import releaseKey from './InputListener/releaseKey'
import isDown from './InputListener/isDown'


class LveJSInputListener extends LveJSElementListener {

  constructor() {

    super()
    this.keys = {}
    this.pressedKey = new Set

  }

}


LveJSInputListener.prototype.initKeys = initKeys
LveJSInputListener.prototype.setKey = setKey
LveJSInputListener.prototype.pressKey = pressKey
LveJSInputListener.prototype.releaseKey = releaseKey
LveJSInputListener.prototype.isDown = isDown


export default LveJSInputListener