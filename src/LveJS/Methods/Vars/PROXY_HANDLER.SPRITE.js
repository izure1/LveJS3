let handler


handler = {}
handler.__getter = null
handler.__observer = function (p, v, t) {

  this.emit('spritemodified', {

    property: p,
    value: v

  })

}

handler.stage = function (p, v, t) {

  if (this.type !== 'sprite') {
    return handler
  }

  this.__setInformationSprite(this.style.width, this.style.height, v)

  return v

}

handler.fps = function (p, v, t) {

  if (this.type !== 'sprite') {
    return handler
  }

  this.__system__.sprite.interval = 1000 / v

  return v

}

handler.playing = function (p, v, t) {

  if (this.type !== 'sprite') {
    return handler
  }

  v = !!v

  switch (v) {

    case true:
      this.emit('play')
      break

    default:
      this.emit('pause')
      break

  }

  return v

}

handler.current = function (p, v, t) {

  if (v >= t.stage) {
    v = 0
  }

  return v

}

export default handler