export default function __transitionUpdate(tt = 0) {

  this.__system__.transition.update(tt * this.timescale)

  return this

}