import {
  getScale,
  getPosition
} from '../Utils/vertex';

import {
  square,
  circle,
  text,
  image
} from '../Utils/drawCanvas';


/**
 * 
 * @param {HTMLCanvasElement} c Drawing Canvas
 * @param {Number} w Canvas width
 * @param {Number} h Canvas height
 * @param {Number} ax Camera axis x
 * @param {Number} ay Camera axis y
 * @param {Number} az Camera axis z
 * @param {Number} s Scale distance
 * @param {Number} a Alpha color
 */
export default function __draw(c, w, h, ax, ay, az, s, a = 1) {

  let o;
  let {
    x,
    y,
    scale
  } = getPosition(w, h, ax, ay, az, this.style.left, this.style.bottom, this.style.perspective, s);

  o = this.__system__.style;
  x += scale * o.x;
  y += scale * o.y;

  switch (this.type) {

    case 'square':
      square(c, x, y, o);
      break;

    case 'circle':
      circle(c, x, y, o);
      break;

    case 'image':
      image(c, this.element, x, y, o);
      break;

    case 'text':
      text(c, this.__system__.textInformation, x, y, o);
      break;

  }

};