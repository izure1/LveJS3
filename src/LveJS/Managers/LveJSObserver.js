import init from './Observer/init'
import observe from './Observer/observe'
import disconnect from './Observer/disconnect'


class LveJSObserver {

  constructor() {
    this.inited = false
    this.list = {}
    this.canvas = null
  }

}


LveJSObserver.prototype.init = init
LveJSObserver.prototype.observe = observe
LveJSObserver.prototype.disconnect = disconnect


export default LveJSObserver