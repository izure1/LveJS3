export default function setCallback(e, callback, repeat = -1) {

  if (!this.event.has(e)) {
    this.event.set(e, new Set)
  }

  callback = callback.bind(this)

  this.event.get(e).add({
    repeat,
    callback
  })

  return this

}