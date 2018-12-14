import easing from './Utils/easing'


class LveJSTransition {

  init(name) {

    this[name] = {
      running: false,
      easing: 'linear',
      runtime: 0,
      duration: 0,
      opacity: 0,
      start: 0,
      end: 0
    }

    return this

  }

  run(name, start, end, duration, easing) {

    this.init(name)

    let t

    t = this[name]

    t.running = true
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

  update(runtime = 0) {

    let t
    let d

    for (let name in this) {

      t = this[name]

      if (!t.running) {
        continue
      }

      t.runtime += runtime

      if (t.runtime > t.duration) {
        t.runtime = t.duration
        d = true
      }

      t.opacity = easing(t.easing, t.runtime, t.start, t.end - t.start, t.duration)

      if (d) {
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

}


export default LveJSTransition