export default function __spriteUpdate(tt = 0) {

  let sprite
  let information

  sprite = this.__system__.sprite
  information = this.__system__.world.spriteManager.get(this.spriteset.name)

  if (!this.spriteset.name) {
    return this
  }

  if (!this.spriteset.playing) {
    return this
  }

  if (!information) {
    return this
  }

  if ((sprite.duration += tt * this.timescale) >= information.interval) {

    sprite.duration = 0
    this.spriteset.current += information.next

  }

  return this

}