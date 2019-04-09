import DeltaTimer from '../Utils/DeltaTimer'

import init from './Renderer/init'
import start from './Renderer/start'
import getFPS from './Renderer/getFPS'
import getRenderStates from './Renderer/getRenderStates'
import setObject from './Renderer/setObject'
import sortObject from './Renderer/sortObject'
import run from './Renderer/run'
import runCallbacks from './Renderer/runCallbacks'
import update from './Renderer/update'
import clearFrame from './Renderer/clearFrame'

import DEFAULT_SETTING from './Renderer/Vars/DEFAULT_SETTING'


class LveJSRenderer {

  constructor() {
    this.objects = []
    this.subjects = []
    this.camera = null
    this.setting = new DEFAULT_SETTING
    this.deltaTimer = new DeltaTimer
    this.isRunning = false
    this.isStart = false
    this.interval = 0
  }

}


LveJSRenderer.prototype.init = init
LveJSRenderer.prototype.start = start
LveJSRenderer.prototype.getFPS = getFPS
LveJSRenderer.prototype.getRenderStates = getRenderStates
LveJSRenderer.prototype.setObject = setObject
LveJSRenderer.prototype.sortObject = sortObject
LveJSRenderer.prototype.run = run
LveJSRenderer.prototype.runCallbacks = runCallbacks
LveJSRenderer.prototype.update = update
LveJSRenderer.prototype.clearFrame = clearFrame



export default LveJSRenderer