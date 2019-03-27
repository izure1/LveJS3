import screenfull from 'screenfull'
import domReady from '../Utils/domReady'


export default function exitFullScreen() {

  domReady.call(document, async () => {

    if (screenfull.enabled) {
      screenfull.exit()
    }

  })

  return this.lve

}