import each from './each'
import domReady from '../Utils/domReady'


export default function ready(f) {

  each.call(this, function () {

    if (this.element) {

      this.__onElementReady(() => {
        domReady.call(this.element, f.bind(this))
      })
      
      return

    }

    f.call(this)

  })

  return this

}