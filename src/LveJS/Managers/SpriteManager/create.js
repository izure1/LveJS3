import LveJSSprite from '../../LveJSSprite'


export default function create(name, src, option) {

  option = {
    ...option,
    name,
    src,
  }

  let t = new LveJSSprite(option, this.sprites)
  this.sprites.set(name, t)

  return t

}