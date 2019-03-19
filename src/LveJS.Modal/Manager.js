import show from './Manager/show'
import hide from './Manager/hide'
import close from './Manager/close'


class ModalManager {

  constructor(lve) {
    this.lve = lve
    this.modals = new Map
  }

}

ModalManager.prototype.show = show
ModalManager.prototype.hide = hide
ModalManager.prototype.close = close


export default ModalManager