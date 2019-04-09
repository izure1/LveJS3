class LveJSInterfaceGroup {

  constructor(w) {
    this.interface = w
    this.index = 0
    this.object = new Map
  }

}

import appendContent from './InterfaceGroup/appendContent'
import sortContent from './InterfaceGroup/sortContent'
import getContent from './InterfaceGroup/getContent'
import removeContent from './InterfaceGroup/removeContent'
import remove from './InterfaceGroup/remove'

LveJSInterfaceGroup.prototype.appendContent = appendContent
LveJSInterfaceGroup.prototype.sortContent = sortContent
LveJSInterfaceGroup.prototype.getContent = getContent
LveJSInterfaceGroup.prototype.removeContent = removeContent
LveJSInterfaceGroup.prototype.remove = remove


export default LveJSInterfaceGroup