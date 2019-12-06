class SuppressJob {

  constructor() {
    this.list = new Map
  }

  static setTimeout(fn, delay) {

    return setTimeout(() => {
      fn()
    }, delay)

  }

  isDoing(id) {
    return this.list.has(id)
  }

  set(id, complete, delay = 0, count = -1) {

    let t
    let r

    return new Promise(resolve => {

      t = this.list.get(id)

      if (t) {

        clearTimeout(t.to)

        if (--t.count !== 0) {
          t.to = SuppressJob.setTimeout(t.fn, t.delay)
          return
        }

        t.fn()
        this.clear(t.id)

      } else {

        t = {
          to: null,
          fn: null,
          count: count
        }

        t.fn = () => {
          complete()
          resolve()
          this.list.delete(id)
        }

        t.delay = delay
        t.to = SuppressJob.setTimeout(t.fn, t.delay)

        this.list.set(id, t)

      }

    })

  }

  clear(id) {

    if (!this.list.has(id)) {
      return
    }

    clearTimeout(this.list.get(id).to)
    this.list.delete(id)

  }

  immediately(id) {

    let t

    t = this.list.get(id)

    if (!t) {
      return
    }

    this.list.get(id).fn()
    this.clear(id)

  }

}

module.exports = SuppressJob