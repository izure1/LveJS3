import screenfull from 'screenfull'
import getMouseCoords from '../../Utils/getMouseCoords'


function getMouseCoordsFromFullscreen(el, t) {

  if (!screenfull.isFullscreen) {
    return t
  }

  let s
  let w, h

  w = el.width
  h = el.height

  if (w > h) {

    s = t.offset.width / w

    t.x /= s
    t.y -= ((t.offset.height - (h * s)) / 2)
    t.y /= s

  } else {

    s = h / t.offset.height

    t.x -= ((t.offset.width - (w * s)) / 2)
    t.x /= s
    t.y /= s

  }

  return t

}


export default function _getMouseCoords(e) {

  if (!this.getRenderStates().ready) {
    return
  }

  let c, t

  c = this.setting.canvas.element

  t = getMouseCoords(c, e)
  t = getMouseCoordsFromFullscreen(c, t)

  return t

}