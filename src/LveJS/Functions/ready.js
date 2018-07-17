import domReady from '../Utils/domReady';


export default function ready(f) {

  if (typeof f !== 'function') {
    return lve;
  }

  domReady.call(document, f);

};