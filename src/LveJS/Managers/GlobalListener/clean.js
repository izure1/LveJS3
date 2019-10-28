export default function clean(entries) {

  for (let [e, handler] of entries) {
    this.removeListener(e)
  }

  return this

}