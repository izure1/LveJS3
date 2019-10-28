export default function removeListener(e) {

  if (!this.handler.has(e)) {
    return this
  }

  if (!this.element) {
    return this
  }
  
  this.element.removeEventListener(e, this.handler.get(e))
  this.handler.delete(e)

  return this

}