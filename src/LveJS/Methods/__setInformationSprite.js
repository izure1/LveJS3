import getSizeofElement from '../Helpers/getSizeofElement'
import ready from '../Utils/domReady'


export default function __setInformationSprite(w = 0, h = 0, s = 1) {

  let vp
  let c

  if (this.type !== 'sprite') {
    return this
  }

  ready.call(this.element, () => {

    this.__system__.world.lve.start(() => {

      vp = this.__system__.world.canvas
      c = getSizeofElement(this.element, w, h, vp.width, vp.height)

      this.__system__.style.width = c.width
      this.__system__.style.height = c.height
      this.__system__.sprite.width = this.element.naturalWidth / s
      this.__system__.sprite.height = this.element.naturalHeight

      switch (w) {

        case 'auto':
          this.__system__.style.width /= s
          break

        default:
          switch (h) {

            case 'auto':
              this.__system__.style.height *= s
              break

          }
          break

      }

    })

  })

  return this

}