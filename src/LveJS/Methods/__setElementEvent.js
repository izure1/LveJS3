import setHiddenContext from '../Utils/setHiddenContext'
import ready from '../Utils/domReady'


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

  this.element.addEventListener('error', () => {
    this.emit('error')
  })

  setHiddenContext.call(this.element, '__setElementEvent', true)
  ready.call(this.element, () => {
    setHiddenContext.call(this.element, '__isLoaded', true)
  })

  return this

}