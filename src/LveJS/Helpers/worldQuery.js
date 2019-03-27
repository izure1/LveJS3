import screenfull from 'screenfull'

import clickCheck from '../Utils/clickCheck'
import getMouseCoords from '../Utils/getMouseCoords'


function getMouseCoordsFromFullscreen(el, t) {

  if (!screenfull.isFullscreen) {
    return t
  }

  let s

  if (el.width > el.height) {

    s = t.offset.width / el.width

    t.x /= s
    t.y -= ((t.offset.height - (el.height * s)) / 2)
    t.y /= s

  } else {

    s = el.height / t.offset.height

    t.x -= ((t.offset.width - (el.width * s)) / 2)
    t.x /= s
    t.y /= s

  }

  return t

}

function mouseQuery(objects, pos) {

  let r
  let p, s
  let rw, rh, rx, ry, rs

  r = null

  for (let t of objects) {

    if (!t.__isDisplay()) continue

    p = t.__system__.position
    s = t.__system__.style

    rs = p.s

    rw = s.width * rs
    rh = s.height * rs

    rx = rw * s.rx
    ry = rh * s.ry
    rx += p.x
    ry += p.y

    if (clickCheck(pos, [p.x, p.y], [rw, rh], [rx, ry], -t.style.rotate)) {
      r = t
      break
    }

  }

  return r

}


export default function worldQuery(e) {

  let a, t
  let m, b

  a = this.renderer.getRenderStates()
  m = this.cache.mouseSelected
  b = null

  if (!a.ready) {
    return
  }

  a = a.value

  t = getMouseCoords(this.canvas, e)
  t = getMouseCoordsFromFullscreen(this.canvas, t)
  t = mouseQuery(this.renderer.objects, [t.x, t.y])

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