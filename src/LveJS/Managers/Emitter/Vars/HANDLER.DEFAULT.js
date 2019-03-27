let handler

handler = {}
handler.mouseover = function () {

  let c

  c = this.__system__.world.canvas

  if (!c) {
    return
  }

  this.__system__.world.cache.mouseCursor = getComputedStyle(c).cursor

  c.style.cursor = this.style.cursor

}

handler.mouseout = function () {

  let c

  c = this.__system__.world.canvas

  if (!c) {
    return
  }

  c.style.cursor = this.__system__.world.cache.mouseCursor

}


export default handler