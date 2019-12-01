/**
 * 
 * @param {String|null} src  Asset src
 * @description
 * Returns the blob src of the loaded set
 */
export default function getAsset(src = null) {

  if (src === null) {
    return Array.from(this.assetManager.get()).map(t => t.getURL())
  }

  src = this.assetManager.get(src)
  if (src === null) return null

  return src.getURL()

}