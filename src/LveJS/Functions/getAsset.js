/**
 * 
 * @param {String} src  Asset src
 * @description
 * Returns the blob src of the loaded set
 */
export default function getAsset(src) {

  return this.assetManager.get(src)

}