export default function remove() {

  for (let t of this.object.values()) {
    t.remove()
    this.object.delete(t.name)
  }

  this.interface.removeGroup(this)

}