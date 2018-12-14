import each from './each'


/**
 * 
 * @param {Number} d Duration
 * @param {*} e Easing type
 */
export default function fadeIn(d = 400, e = 'linear') {

  each.call(this, function () {

    this.__system__.transition.run('fade', 0, 1, d, e)
    this.style.display = 'block'

  })

  return this

}