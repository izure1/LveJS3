export default function getAssetBlob(src) {

  let blob = this.assetManager.get(src)

  if (!blob) {
    return null
  }

  return blob

}