export default function (callback = function () {}) {

  this.renderer.setting.extendEnd.push(callback.bind(this))

}