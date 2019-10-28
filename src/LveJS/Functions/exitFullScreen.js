import screenfull from 'screenfull'
import domReady from '../Utils/domReady'


export default function exitFullScreen() {

  domReady.call(document, async () => {

    if (screenfull.isEnabled) {
      screenfull.exit()
    }

  })

  return this.lve

}