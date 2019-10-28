import each from './each'


/**
 * 
 * @param {Number} d Duration
 * @param {String} e Easing type
 * @param {Number} l Delay
 * @param {Boolean} r When end of fadeout, this object will be destroy
 */
export default function fadeOut(d = 400, e = 'linear', l = 0, r = false) {

  each.call(this, function () {

    if (!this.__isDisplay()) {
      return
    }

    if (r) {

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