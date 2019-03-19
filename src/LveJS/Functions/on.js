export default function on(e, h) {

  e = e.split(' ')

  for (let p of e) {

    this.emitter.addEventListener(p, h)

  }

  return this.lve

}