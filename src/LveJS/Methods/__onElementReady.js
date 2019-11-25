export default function __onElementReady(f) {

  this.__system__.ready.element.wait(f)
  return this

}