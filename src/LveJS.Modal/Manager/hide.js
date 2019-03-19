export default function (name, duration = 600) {

  if (!this.modals.has(name)) {
    return
  }

  this.modals.get(name).hide(duration)

}