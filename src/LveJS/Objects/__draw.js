import {
  getScale,
  getPosition
} from '../Utils/vertex';
import {
  square,
  circle
} from '../Utils/drawCanvas';


/**
 * 
 * @param {HTMLCanvasElement} v Drawing Canvas
 * @param {Number} w Canvas width
 * @param {Number} Canvas height 
 * @param {Number} ax Camera axis x
 * @param {Number} ay Camera axis y
 * @param {Number} az Camera axis z
 * @param {Number} s Scale distance
 * @param {Number} a Alpha color
 */
export default function __draw(v, w, h, ax, ay, az, s, a = 1) {

  let {
    x, y
  } = getPosition(w, h, ax, ay, az, this.style.left, this.style.bottom, this.style.perspective, s);

};