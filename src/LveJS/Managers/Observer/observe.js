export default function observe(u, o, fn) {

  let observer

  if (u in this.list) {
    this.disconnect(u)
  }

  observer = new MutationObserver(mutations => {

    for (let mutation of mutations) {
      fn(mutation)
    }

  })

  observer.observe(this.canvas, o)
  this.list[u] = observer

  return this

}