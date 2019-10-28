export default function clean(entries) {

  for (let [e, handler] of entries) {
    this.disconnect(e)
  }

  return this

}