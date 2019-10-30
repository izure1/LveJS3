/**
 * 
 * @param {Function} callback
 * @description
 * Even if the screen is not updated due to performance or any problems, the function will work at the end of each frame
 */
export default function (callback = function () {}) {

  this.renderer.setting.extendEnd.push(callback.bind(this))
  return this.lve

}