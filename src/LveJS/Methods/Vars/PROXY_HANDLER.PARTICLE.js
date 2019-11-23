let handler

handler = {}
handler.__getter = {}

handler.__observer = function (p, v, t) {

  this.emit('particlemodified', {
    property: p,
    value: v,
  })

}

handler.playing = function (p, v, t) {

  if (this.type !== 'particle') {
    return this.particleset[p]
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

handler.gravityScale = function (p, v, t) {

  if (this.type !== 'particle') {
    return this.particleset[p]
  }

  this.__system__.proxy.gravityscale = v
  return v

}

export default handler