export default function loadMultiple(srcs, cb = function () {}) {

  srcs = srcs.map(src => this.load(src, cb))

  return new Promise(resolve => {
    Promise.all(srcs).then(resolve)
  })

}