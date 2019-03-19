import each from './each'



function image(src, d, e) {

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

}

function text(text, d) {

  this.text = text
  this.once('change', () => {
    this.__system__.text.information.typing(d)
  })

}

/**
 * 
 * @param {Number} src Change in value
 * @param {Number} d Duration
 * @param {*} e Easing type
 */
export default function transition(src, d = 0, e = 'linear') {

  each.call(this, function () {

    switch (this.type) {

      case 'image':
        image.call(this, src, d, e)
        break

      case 'text':
        text.call(this, src, d)
        break

    }

  })

  return this

}