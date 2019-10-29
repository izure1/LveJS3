export default function update(tt, renderState) {

  for (let t of this.particle) {

    t.forceUpdate(tt)
    t.draw(...renderState)

  }

  return this

}