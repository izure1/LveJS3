import each from './each'
import {
  throws
} from 'assert';


/**
 * 
 * @param {Number} src Change in value
 * @param {Number} d Duration
 * @param {*} e Easing type
 */
export default function transition(src, d = 0, e = 'linear') {

  each.call(this, function () {

    if (this.src === src) {
      return
    }

    let el

    el = new Image
    el.src = this.src

    this.__system__.transition.run('image_origin', 0, 1, d, e)
    this.__system__.transition.attach('image_origin', {
      element: el,
      width: this.width(),
      height: this.height()
    })

    this.src = src

  })

  return this

}