import getSizeofElement from '../Helpers/getSizeofElement'
import ready from '../Utils/domReady'

const JOB_SYMBOL = Symbol('setInformationSprite')


export default function __setInformationSprite() {

  let vp
  let c
  let sprite

  this.__system__.suppressJob.set(JOB_SYMBOL, () => {

    if (this.type !== 'sprite') {
      return this
    }

    sprite = this.__system__.world.spriteManager.get(this.__system__.sprite.name)

    if (!sprite) {
      return this
    }

    ready.call(sprite.element, () => {

      this.__system__.world.lve.start(() => {

        vp = this.__system__.world.canvas
        c = getSizeofElement(sprite.element, this.style.width, this.style.height, vp.width, vp.height)

        this.__system__.style.width = c.width
        this.__system__.style.height = c.height
        this.__system__.sprite.width = sprite.width
        this.__system__.sprite.height = sprite.height

        switch (this.style.width) {

          case 'auto':
            this.__system__.style.width /= sprite.frame
            break

          default:
            switch (this.style.height) {

              case 'auto':
                this.__system__.style.height *= sprite.frame
                break

            }
            break

        }

        this.__setPhysicsFixture()

      })

    })

  }, 1)

  return this

}