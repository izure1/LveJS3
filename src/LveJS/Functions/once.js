export default function once(e, h) {

  e = e.split(' ')

  for (let p of e) {

    this.emitter.addEventListener(p, h, true)

  }

  return this.lve

}