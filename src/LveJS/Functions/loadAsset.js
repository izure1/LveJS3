/**
 * 
 * @param {Array} srcs  Assets src
 * @param {Function} cb  Callback function
 * @returns {Promise}
 * @description
 * Load the asset. You can use the asset immediately using the src converted to blob url
 */
export default function loadAsset(srcs, cb = function () {}) {

  cb = cb.bind(this.lve)

  return this.assetManager.loadMultiple(srcs, cb)

}