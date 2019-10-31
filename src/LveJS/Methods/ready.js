import each from './each'
import ready from '../Utils/domReady'


export default function Ready(f) {

  each.call(this, function () {

    switch (this.type) {

      case 'image':
      case 'video':
      case 'sprite':
      case 'particle':
        ready.call(this.element, f.bind(this))
        break

      default:
        f.call(this)
        break

    }

  })

  return this

}