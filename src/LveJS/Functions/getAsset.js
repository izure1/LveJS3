/**
 * 
 * @param {String|null} src  Asset src
 * @description
 * Returns the blob src of the loaded set
 */
export default function getAsset(src = null) {

  return this.assetManager.get(src)

}