/**
 * 
 * @param {Function} callback 
 * @description
 * Before the screen is updated, call the specified function
 */
export default function (callback = function () {}) {

  this.renderer.setting.extendDrawStart.push(callback.bind(this))
  return this.lve

}