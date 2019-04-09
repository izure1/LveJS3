export default function removeContent(u) {

  let t

  if (!this.object.has(u)) {
    return
  }

  t = this.object.get(u)

  t.remove()
  this.object.delete(u)

}