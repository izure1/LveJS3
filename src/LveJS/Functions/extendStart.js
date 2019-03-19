export default function (callback = function () {}) {

  this.renderer.setting.extendStart.push(callback.bind(this))

}