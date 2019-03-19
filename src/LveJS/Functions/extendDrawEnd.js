export default function (callback = function () {}) {

  this.renderer.setting.extendDrawEnd.push(callback.bind(this))

}