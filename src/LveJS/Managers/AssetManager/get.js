import path from 'path'


export default function get(src) {

  src = path.resolve(src)

  if (!this.map.has(src)) {
    return null
  }

  return this.map.get(src)

}