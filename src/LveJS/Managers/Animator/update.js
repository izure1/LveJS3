export default function update(tt = 0) {

  let t

  for (let id in this.list) {

    t = this.get(id)

    if (t.done) {
      this.delete(id)
      continue
    }

    t.update(tt)

  }

}