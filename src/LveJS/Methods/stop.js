import each from './each'


export default function stop(p) {

  let t
  let r

  each.call(this, function () {

    r = p ? p.split(' ') : Object.keys(this.animationset)

    for (let t of r) {

      delete this.animationset[t]
      this.emit('animatestop', {
        property: t
      })

    }

  })

  return this

}