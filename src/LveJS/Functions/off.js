export default function off(e, h = null) {

  let t
  let r

  t = this.emitter.global
  r = e ? e.split(' ') : Object.keys(t)

  for (let p of r) {

    if (h === null) t[p] = []
    else {
      this.emitter.removeEventListener(p, h)
    }

  }

  return this.lve

}