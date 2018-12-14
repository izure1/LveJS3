import easing from '../Utils/easing'


export default function __animationUpdate(tt = 0) {

  let t
  let d
  let v

  for (let p in this.animationset) {

    t = this.animationset[p]
    t.runtime += tt * this.timescale

    if (t.runtime > t.duration) {
      t.runtime = t.duration
      d = true
    }

    v = easing(t.type, t.runtime, t.start, t.end - t.start, t.duration)

    this.style[p] = v
    this.emit('animateupdate', {
      propertyName: p,
      value: v
    })

    if (d) {
      delete this.animationset[p]
      this.style[p] = t.end
      this.emit('animateend', {
        propertyName: p,
        value: t.end
      })
    }

  }

  return this

}