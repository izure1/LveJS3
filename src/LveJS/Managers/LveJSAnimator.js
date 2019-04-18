import DeltaTimer from '../Utils/DeltaTimer'

import start from './Animator/start'
import run from './Animator/run'
import update from './Animator/update'
import get from './Animator/get'
import del from './Animator/delete'
import add from './Animator/add'
import value from './Animator/value'


class LveJSAnimator {

  constructor() {

    this.list = {}
    this.isStart = false
    this.isRunning = false
    this.deltaTimer = new DeltaTimer
    this.interval = 0

  }

}


LveJSAnimator.prototype.start = start
LveJSAnimator.prototype.run = run
LveJSAnimator.prototype.update = update
LveJSAnimator.prototype.get = get
LveJSAnimator.prototype.delete = del
LveJSAnimator.prototype.add = add
LveJSAnimator.prototype.value = value


export default LveJSAnimator