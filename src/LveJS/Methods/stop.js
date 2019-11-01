import each from './each'


function ctop(p) {
  return p.substr(1)
}

function ctoa(p) {
  return `.${p}`
}

export default function stop(p) {

  let t
  let r

  each.call(this, function () {

    r = p ? p.split(' ').map(ctoa) : Object.keys(this.animationset)

    for (let t of r) {

      delete this.animationset[t]
      this.emit('animatestop', {
        property: ctop(t)
      })

    }

  })

  return this

}