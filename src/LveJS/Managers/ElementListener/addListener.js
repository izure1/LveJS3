import HANDLERS from './Vars/HANDLERS'


export default function addListener(e, f) {

  if (!(e in HANDLERS)) {
    return this
  }

  if (this.handler.has(e)) {
    this.removeListener(e)
    return this
  }


  let cb
  
  f = f.bind(this)
  cb = origin => {
    HANDLERS[e].call(this, origin, f)
  }

  this.element.addEventListener(e, cb)
  this.handler.set(e, cb)

  return this

}