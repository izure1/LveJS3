import load from './AssetManager/load'
import loadMultiple from './AssetManager/loadMultiple'
import get from './AssetManager/get'
import isReady from './AssetManager/isReady'
import ready from './AssetManager/ready'
import on from './AssetManager/on'
import once from './AssetManager/once'
import emit from './AssetManager/emit'
import setCallback from './AssetManager/setCallback'


class LveJSAssetManager {

  constructor() {

    this.event = new Map
    this.map = new Map
    this.loading = new Set

  }

}


LveJSAssetManager.prototype.load = load
LveJSAssetManager.prototype.loadMultiple = loadMultiple
LveJSAssetManager.prototype.get = get
LveJSAssetManager.prototype.isReady = isReady
LveJSAssetManager.prototype.ready = ready
LveJSAssetManager.prototype.on = on
LveJSAssetManager.prototype.once = once
LveJSAssetManager.prototype.emit = emit
LveJSAssetManager.prototype.setCallback = setCallback


export default LveJSAssetManager