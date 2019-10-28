export default function addListener(e, f) {

  if (this.handler.has(e)) {
    this.removeListener(e)
  }

  f = f.bind(this)

  this.element.addEventListener(e, f)
  this.handler.set(e, f)

  return this

}