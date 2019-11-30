export default function get(src = null) {

  if (src === null) {
    return this.map.values()
  }

  src = this.getResolvedURL(src)

  if (!this.map.has(src)) {
    return null
  }

  return this.map.get(src)

}