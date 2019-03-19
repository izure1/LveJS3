import HANDLERS from './Vars/HANDLERS'


export default function addListener(e) {

  let f

  if (!(e in HANDLERS)) {
    return this
  }

  if (e in this.handlers) {
    return this
  }

  f = HANDLERS[e].bind(this)

  this.canvas.addEventListener(e, f)
  this.handlers[e] = f

}