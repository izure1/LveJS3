export default function removeListener(e) {

  if (!e in this.handlers) {
    return this
  }

  if (!this.canvas) {
    return this
  }
  
  this.canvas.removeEventListener(e, this.handlers[e])
  delete this.handlers[e]

}