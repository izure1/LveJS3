/**
 * 
 * @param {String} u  Unique observe ID
 * @param {Object} o  Observe setting
 * @param {Function} fn  Callback function
 */
export default function observe(u, o, fn) {

  let observer

  if (this.handler.has(u)) {
    this.disconnect(u)
  }

  observer = new MutationObserver(mutations => {

    for (let mutation of mutations) {
      fn(mutation)
    }

  })

  observer.observe(this.element, o)
  this.handler.set(u, observer)

  return this

}