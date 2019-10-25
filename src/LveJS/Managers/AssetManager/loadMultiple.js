export default function loadMultiple(srcs, cb = function () {}) {

  srcs = srcs.map(src => this.load(src, cb))

  return new Promise(async resolve => {

    srcs = await Promise.all(srcs)
    srcs = srcs.filter(src => src !== null)

    resolve(srcs)

  })

}