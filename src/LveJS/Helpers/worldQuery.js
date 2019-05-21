import clickCheck from '../Utils/clickCheck'


function mouseQuery(objects, pos) {

  let r
  let p, s
  let rw, rh, rx, ry, rs
  let x, y

  r = null

  for (let t of objects) {

    if (!t.__isDisplay()) continue
    if (!t.style.pointerEvents) continue

    p = t.__system__.position
    s = t.__system__.style

    rs = p.s

    rw = s.width * rs
    rh = s.height * rs

    x = p.x
    y = p.y

    rx = rw * s.rx
    ry = rh * s.ry
    rx += x
    ry += y

    if (clickCheck(pos, [x, y], [rw, rh], [rx, ry], -t.style.rotate)) {
      r = t
      break
    }

  }

  return r

}


export default function worldQuery(e) {

  let a, s, t
  let m, b

  a = this.renderer.getRenderStates()
  m = this.cache.mouseSelected
  b = null

  if (!a.ready) {
    return
  }

  a = a.value
  s = a[10]

  t = this.renderer.getMouseCoords(e)
  t = mouseQuery(this.renderer.subjects, [t.x, t.y])

  if (t) {
    t.emit(e.type, e)
  }


  if (m !== t) {

    if (m) {
      m.emit('mouseout', e)
      b = null
    }

    if (t) {
      t.emit('mouseover', e)
      b = t
    }

    this.cache.mouseSelected = b

  }


}