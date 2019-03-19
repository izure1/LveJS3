import each from './each'


export default function on(e, h) {

  let t

  e = e.split(' ')
  each.call(this, function () {

    for (let p of e) {

      if (!(p in this.__system__.events)) {
        this.__system__.events[p] = new Map
      }

      t = h.bind(this)
      this.__system__.events[p].set(h, {
        once: false
      })

    }

  })

  return this

}