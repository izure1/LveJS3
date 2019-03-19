import domReady from '../Utils/domReady'


export default function ready(f) {

  if (typeof f !== 'function') {
    return lve.lve
  }

  domReady.call(document, f)

}