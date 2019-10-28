/**
 * 
 * @param {Array|String} srcs  Assets src
 * @param {Function} cb  Callback function
 * @description
 * Load the asset. You can use the asset immediately using the src converted to blob url
 */
export default function loadAsset(srcs, cb = function () {}) {

  cb = cb.bind(this.lve)

  if (!Array.isArray(srcs)) {
    srcs = [srcs]
  }

  this.assetManager.loadMultiple(srcs, cb)

  return this.lve

}