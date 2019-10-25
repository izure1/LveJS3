import load from './AssetManager/load'
import loadMultiple from './AssetManager/loadMultiple'
import get from './AssetManager/get'
import isReady from './AssetManager/isReady'


class LveJSAssetManager {

  constructor() {

    this.map = new Map
    this.loading = new Set

  }

}


LveJSAssetManager.prototype.load = load
LveJSAssetManager.prototype.loadMultiple = loadMultiple
LveJSAssetManager.prototype.get = get
LveJSAssetManager.prototype.isReady = isReady

export default LveJSAssetManager