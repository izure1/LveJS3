import LveJSListener from './LveJSListener'
import SuppressJob from '../Utils/SuppressJob'

import addListener from './ElementListener/addListener'
import removeListener from './ElementListener/removeListener'
import clean from './ElementListener/clean'

import SETTING from './ElementListener/Vars/SETTING'


class LveJSElementListener extends LveJSListener {

  constructor() {

    super()
    this.element = null
    this.setting = new SETTING
    this.suppressJob = new SuppressJob

  }

}


LveJSElementListener.prototype.addListener = addListener
LveJSElementListener.prototype.removeListener = removeListener
LveJSElementListener.prototype.clean = clean


export default LveJSElementListener