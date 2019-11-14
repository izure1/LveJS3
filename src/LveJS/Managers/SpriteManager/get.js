export default function get(name) {

  if (!this.sprites.has(name)) {
    return null
  }

  return this.sprites.get(name)

}