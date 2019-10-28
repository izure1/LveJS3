export default function emit(e) {

  if (!this.event.has(e)) {
    return this.event.set(e, new Set)
  }

  for (let t of this.event.get(e)) {

    t.repeat--
    t.callback(this)

    if (!t.repeat) {
      this.event.delete(t)
    }

  }

  return this

}