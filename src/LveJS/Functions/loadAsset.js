export default function loadAsset(srcs, cb = function () {}) {

  cb = cb.bind(this.lve)
  srcs = srcs.map(src => this.assetManager.load(src, cb))

  return Promise.all(srcs)

}