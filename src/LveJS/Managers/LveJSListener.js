import SuppressJob from '../Utils/SuppressJob'

import addListener from './Listener/addListener'
import removeListener from './Listener/removeListener'
import init from './Listener/init'

import SETTING from './Listener/Vars/SETTING'


class LveJSListener {

  constructor() {

    this.inited = false
    this.canvas = null
    this.worldQuery = null
    this.handlers = {}
    this.setting = new SETTING
    this.suppressJob = new SuppressJob
    
  }

}


LveJSListener.prototype.init = init
LveJSListener.prototype.addListener = addListener
LveJSListener.prototype.removeListener = removeListener


export default LveJSListener