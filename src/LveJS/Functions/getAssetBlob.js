/**
 * 
 * @param {String|null} src  Asset src
 * @description
 * Returns the blob object of the loaded set
 */
export default function getAssetBlob(src = null) {

  if (src === null) {
    return Array.from(this.assetManager.get()).map(t => t.getBlob())
  }

  src = this.assetManager.get(src)
  if (src === null) return null

  return src.getBlob()

}