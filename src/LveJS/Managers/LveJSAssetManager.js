import load from './AssetManager/load'
import isReady from './AssetManager/isReady'


class LveJSAssetManager {

  constructor() {

    this.map = new Map
    this.loading = new Set

  }

}


LveJSAssetManager.prototype.load = load
LveJSAssetManager.prototype.isReady = isReady

export default LveJSAssetManager