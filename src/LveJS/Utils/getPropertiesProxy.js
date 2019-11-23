/**
 * 
 * @param {StirObject} t
 * target to observed object
 * @param {Object} h
 * namespace object for handler functions
 * @returns {Proxy} 
 * 
 */
export default function getPropertiesProxy(t, h) {

  let self = this

  return new Proxy(t, {

    get(t, p) {

      if (!h.__getter) {
        return t[p]
      }

      if (h.__getter[p]) {
        return h.__getter[p].call(self, p, t)
      }

      return t[p]

    },

    set(t, p, v) {

      let r

      if (h.__observer) {
        h.__observer.call(self, p, v, t)
      }

      r = h[p] ? h[p].call(self, p, v, t) : v

      if (r === h) {
        return true
      }

      t[p] = r

      return true

    }

  })

}