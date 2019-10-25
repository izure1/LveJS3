export default function following() {

  let t

  t = this.get()

  if (!t) {
    return this
  }

  return this.__system__.world.hashTable.select(t.followset.following).pop()

}