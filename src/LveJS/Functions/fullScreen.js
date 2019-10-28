import screenfull from 'screenfull'
import domReady from '../Utils/domReady'


export default function fullScreen() {

  domReady.call(document, async () => {

    if (screenfull.isEnabled) {
      screenfull.request(this.canvas)
    }

  })

  return this.lve

}