import each from './each'


/**
 * 
 * @param {Number} d Duration
 * @param {String} e Easing type
 * @param {Number} l Delay. If this value is not 0, this object will be destroy after fadeout
 */
export default function fadeOut(d = 400, e = 'linear', l = 0) {

  each.call(this, function () {

    let r

    if (!this.__isDisplay()) {
      return
    }

    if (l) {

      this.__system__.ghost = true
      r = () => {
        this.remove()
      }

    }

    this.__system__.transition.run('fade', 1, 0, d, e, l, r)
    this.style.display = 'none'

  })

  return this

}