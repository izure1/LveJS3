/**
 * 
 * @param {Function} callback 
 * @description
 * Even if the screen is not updated due to performance or any problems, the function will work for each frame
 */
export default function (callback = function () {}) {

  this.renderer.setting.extendStart.push(callback.bind(this))

}