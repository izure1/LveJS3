export default function removeListener(e) {

  this.handler.delete(e)
  return this

}