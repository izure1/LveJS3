import getObjectScope from '../Helpers/getObjectScope'

export default function __animationUpdate(tt = 0) {

  let t, v

  for (let p in this.animationset) {

    let {
      scope,
      property
    } = getObjectScope(this, p)

    t = this.animationset[p]
    v = t.update(tt * this.timescale)

    scope[property] = v

    this.emit('animateupdate', {
      scope,
      property,
      value: v
    })

    if (t.done) {

      delete this.animationset[p]

      this.emit('animateend', {
        scope,
        property,
        value: t.end
      })

    }

  }

  return this

}