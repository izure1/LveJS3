export default function (assets) {

  for (let asset of assets) {
    this.map.delete(asset.getName())
    URL.revokeObjectURL(asset.getURL())
  }

  return this

}