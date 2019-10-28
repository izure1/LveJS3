import LveJSListener from './LveJSListener'

import observe from './ElementObserver/observe'
import disconnect from './ElementObserver/disconnect'
import clean from './ElementObserver/clean'


class LveJSElementObserver extends LveJSListener {

  constructor() {

    super()
    this.element = null

  }

}


LveJSElementObserver.prototype.observe = observe
LveJSElementObserver.prototype.disconnect = disconnect
LveJSElementObserver.prototype.clean = clean


export default LveJSElementObserver