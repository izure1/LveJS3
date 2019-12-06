import setHiddenContext from '../Utils/setHiddenContext'
import ready from '../Utils/domReady'



function setAudioContext(props) {

  for (let p in props) {
    this[p] = props[p]
  }
  
}

export default function __setElementEvent() {

  if (!(this.element instanceof HTMLElement)) {
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
  
  this.element.addEventListener('timeupdate', () => {
    this.emit('timeupdate')
  })

  return this

}