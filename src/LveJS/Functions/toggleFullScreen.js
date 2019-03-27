import screenfull from 'screenfull'
import domReady from '../Utils/domReady'


export default function toggleFullScreen() {

  domReady.call(document, async () => {

    if (screenfull.enabled) {
      screenfull.toggle(this.canvas)
    }

  })

  return this.lve

}