let handler


handler = {}
handler.__getter = null
handler.__observer = function (p, v, t) {

  this.emit('spritemodified', {

    property: p,
    value: v

  })

}

handler.name = function (p, v, t) {

  if (this.type !== 'sprite') {
    return this.spriteset[p]
  }

  this.__system__.sprite.name = v
  let sprite = this.__system__.world.spriteManager.get(v)

  if (sprite && this.spriteset.name !== v) {
    this.spriteset.current = sprite.start
  }

  this.__setInformationSprite()

  return v

}

handler.playing = function (p, v, t) {

  let sprite

  if (this.type !== 'sprite') {
    return this.spriteset[p]
  }

  v = !!v
  sprite = this.__system__.world.spriteManager.get(this.__system__.sprite.name)

  if (!sprite) {
    v = false
  }

  switch (v) {

    case true:

      this.emit('play')

      if (sprite.isOverflow(this.spriteset.current + sprite.next)) {
        this.spriteset.current = sprite.start
      }

      break

    default:
      this.emit('pause')
      break

  }

  return v

}

handler.current = function (p, v, t) {

  if (this.type !== 'sprite') {
    return this.spriteset[p]
  }

  let sprite = this.__system__.world.spriteManager.get(this.__system__.sprite.name)

  if (!sprite) {
    return 0
  }

  if (sprite.isOverflow(v)) {

    this.emit('ended')

    if (this.loop) {
      v = sprite.start
      this.spriteset.playing = true
    } else {
      v = sprite.end
      this.spriteset.playing = false
    }

  }

  return v

}

export default handler