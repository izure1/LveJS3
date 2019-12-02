import LveJSAsset from '../LveJSAsset'


/**
 * 
 * @param {String|null} src  Asset src
 * @description
 * Destroys the LveJSAsset object of the loaded set
 */
export default function destroyAsset(src = null) {

  let assets = this.assetManager.get(src)

  if (!assets) return this.lve
  assets = assets instanceof LveJSAsset ? [assets] : assets
  assets = Array.from(assets)

  this.assetManager.drop(assets)
  return this.lve

}