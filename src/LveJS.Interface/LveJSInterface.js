class LveJSInterface {

  constructor(lve) {

    this.lve = lve
    this.groups = []

    this.__init()

  }

}



import __init from './Interface/__init'
import createGroup from './Interface/createGroup'
import createContent from './Interface/createContent'
import sortGroup from './Interface/sortGroup'
import removeGroup from './Interface/removeGroup'


LveJSInterface.prototype.__init = __init
LveJSInterface.prototype.createGroup = createGroup
LveJSInterface.prototype.createContent = createContent
LveJSInterface.prototype.sortGroup = sortGroup
LveJSInterface.prototype.removeGroup = removeGroup


export default LveJSInterface