export default function __spriteUpdate(tt = 0) {

  let sprite;

  sprite = this.__system__.sprite;

  if (!this.spriteset.playing) {
    return this;
  }

  if ((sprite.duration += tt) >= sprite.interval) {

    sprite.duration = 0;
    this.spriteset.current++;

  }

  return this;

};