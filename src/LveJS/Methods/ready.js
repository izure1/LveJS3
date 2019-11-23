import each from './each'
import domReady from '../Utils/domReady'


export default function Ready(f) {

  each.call(this, function () {

    if (this.element) {
      this.__system__.ready.element.wait(() => {
        domReady.call(this.element, f.bind(this))
      })
      return
    }

    f.call(this)

  })

  return this

}