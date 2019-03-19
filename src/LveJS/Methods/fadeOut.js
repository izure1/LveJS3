import each from './each'


/**
 * 
 * @param {Number} d Duration
 * @param {*} e Easing type
 */
export default function fadeOut(d = 400, e = 'linear') {

  each.call(this, function () {

    if (!this.__isDisplay()) {
      return
    }

    this.__system__.transition.run('fade', 1, 0, d, e)
    this.style.display = 'none'

  })

  return this

}