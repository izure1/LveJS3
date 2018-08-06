import each from './each';
import ready from '../Utils/domReady';


export default function load(s, f = function () {}) {

  each.call(this, function () {

    if (!this.element) {
      return;
    }

    this.src = s;
    this.style.width = 'auto';
    this.style.height = 'auto';

    ready.call(this.element, f);

  });

  return this;

};