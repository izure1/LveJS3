import Modal from '../Modal'


export default function (name, duration = 600, style = {}) {

  let modal

  if (!this.modals.has(name)) {
    this.modals.set(name, new Modal)
  }

  modal = this.modals.get(name)

  modal.updateStyle(style)
  modal.show(duration)

}