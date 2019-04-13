export default function toString() {

  let t

  t = this.get()

  if (!t) {
    return null
  }

  let c, o, w

  c = document.createElement('canvas')

  c.width = Number.MAX_SAFE_INTEGER
  c.height = Number.MAX_SAFE_INTEGER

  w = new this.__system__.world.constructor

  o = JSON.parse(JSON.stringify(t))
  o.style.position = 'fixed'

  w('__capture__').create(o)
  w('__camera__').create({
    type: 'camera'
  }).use()

  c.width = w('__capture__').width()
  c.height = w('__capture__').height()

  w.init({
    canvas: c,
    backgroundColor: 'transparent'
  })

  return w.capture()

}