export default function use(d = 0) {

  let t, w

  t = this.get()
  w = this.__system__.world

  w.renderer.camera = t
  w.lve.requestCaching(true)
  t.emit('use')

  return this

}