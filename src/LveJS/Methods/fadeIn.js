import each from './each'


/**
 * 
 * @param {Number} d Duration
 * @param {*} e Easing type
 */
export default function fadeIn(d = 400, e = 'linear') {

  each.call(this, function () {

    if (this.__isDisplay()) {
      return
    }

    let opacity = this.__system__.transition.opacity()

    this.__system__.transition.run('fade', 0, opacity, d, e)
    this.style.display = 'block'

  })

  return this

}