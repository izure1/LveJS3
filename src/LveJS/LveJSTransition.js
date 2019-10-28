import easing from './Utils/easing'


class LveJSTransition {

  init(name) {

    this[name] = {
      running: false,
      callback: null,
      delay: 0,
      easing: 'linear',
      runtime: 0,
      duration: 0,
      opacity: 0,
      start: 0,
      end: 0
    }

    return this

  }

  run(name, start, end, duration, easing = 'linear', delay = 0, callback = function () {}) {

    this.init(name)

    let t

    t = this[name]

    t.running = true
    t.runtime = -delay
    t.callback = callback
    t.start = start
    t.end = end
    t.duration = duration
    t.easing = easing

  }

  isRunning(name) {

    let pause

    if (!name) {

      for (let name in this) {

        if (this[name].running) {
          pause = true
          break
        }

      }

      return !!pause

    }

    return this[name] && this[name].running

  }

  attach(name, option = {}) {

    Object.assign(this[name], option)
    return this

  }

  update(interval = 0) {

    let t
    let done
    let runtime

    for (let name in this) {

      t = this[name]
      done = false

      if (!t.running) {
        continue
      }

      t.runtime += interval
      runtime = t.runtime > 0 ? t.runtime : 0

      if (t.runtime > t.duration) {
        t.runtime = t.duration
        done = true
      }

      t.opacity = easing(t.easing, runtime, t.start, t.end - t.start, t.duration)

      if (done) {
        this.runCallback(name)
        this.init(name)
      }

    }

  }

  opacity() {

    let opacity
    let t

    opacity = 1

    for (let name in this) {

      t = this[name]

      if (!t.running) {
        continue
      }

      opacity *= t.opacity

    }

    return opacity

  }

  runCallback(name) {

    let t = this[name]

    if (typeof t.callback !== 'function') {
      return
    }

    t.callback()

  }

}


export default LveJSTransition