/**
 * 
 * @param {Function} callback 
 * @description
 * When the screen is updated, the specified function will be called.
 */
export default function (callback = function () {}) {

  this.renderer.setting.extendDrawEnd.push(callback.bind(this))

}