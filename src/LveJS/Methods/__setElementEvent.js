export default function __setElementEvent() {

  if (!(this.element instanceof HTMLElement)) {
    return this
  }

  if (this.element.__setElementEvent) {
    return this
  }

  this.element.addEventListener('canplaythough', () => {
    this.emit('canplay')
  })

  this.element.addEventListener('play', () => {
    this.emit('play')
  })

  this.element.addEventListener('pause', () => {
    this.emit('pause')
  })

  this.element.addEventListener('ended', () => {
    this.emit('ended')
  })

  this.element.__setElementEvent = true

  return this

}