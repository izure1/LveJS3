import each from './each'


/**
 * 
 * @param {String|Function} c
 * @returns {Boolean}
 */
export default function removeClass(c) {

  let r
  let t, f
  let cs

  if ( c === 'function') {
    f = c
  }

  r = []
  each.call(this, function () {

    t = f ? f.call(this, this) : c

    c = this.className
    c += ''
    c = c.split(' ')

    t += ''
    t = t.split(' ')

    cs = t.filter(u => c.indexOf(u) !== -1)

    c = c.filter(s => t.indexOf(s) === -1)
    t = new Set(c)

    t.delete('')

    t = Array.from(t)

    this.className = t.join(' ')

    for (let c of cs) this.emit('removeclass', {
      value: c
    })

  })

  return this

}