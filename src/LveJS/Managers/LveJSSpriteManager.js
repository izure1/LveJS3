import LveJSManager from './LveJSManager'

import initLve from './SpriteManager/initLve'
import create from './SpriteManager/create'
import get from './SpriteManager/get'


class LveJSSpriteManager extends LveJSManager {

  constructor(lve) {

    super()
    this.sprites = new Map
    this.lve = lve

  }

}


LveJSSpriteManager.prototype.initLve = initLve
LveJSSpriteManager.prototype.create = create
LveJSSpriteManager.prototype.get = get


export default LveJSSpriteManager