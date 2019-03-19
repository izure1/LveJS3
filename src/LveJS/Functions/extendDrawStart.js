export default function (callback = function () {}) {

  this.renderer.setting.extendDrawStart.push(callback.bind(this))

}