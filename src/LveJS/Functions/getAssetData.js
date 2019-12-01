/**
 * 
 * @param {String|null} src  Asset src
 * @description
 * Returns the LveJSAsset object of the loaded set
 */
export default function getAssetData(src = null) {

  if (src === null) {
    return Array.from(this.assetManager.get())
  }

  src = this.assetManager.get(src)
  if (src === null) return null

  return src

}