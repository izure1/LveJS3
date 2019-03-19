export default function __transitionUpdate(tt = 0) {

  this.__system__.transition.update(tt * this.timescale)

  if (this.__system__.text.information) {
    this.__system__.text.information.typingUpdate(tt * this.timescale)
  }

  return this

}