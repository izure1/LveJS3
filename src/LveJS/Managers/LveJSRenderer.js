import DeltaTimer from '../Utils/DeltaTimer';

import init from './Renderer/init';
import start from './Renderer/start';
import getFPS from './Renderer/getFPS';
import getDrawArguments from './Renderer/getDrawArguments';
import setObject from './Renderer/setObject';
import sortObject from './Renderer/sortObject';
import run from './Renderer/run';
import update from './Renderer/update';
import clearFrame from './Renderer/clearFrame';

import DEFAULT_SETTING from './Renderer/Vars/DEFAULT_SETTING';


class LveJSRenderer {

  constructor() {
    this.objects = [];
    this.camera = null;
    this.setting = Object.assign({}, DEFAULT_SETTING);
    this.deltaTimer = new DeltaTimer();
    this.isRunning = false;
    this.isStart = false;
    this.interval = 0;
  }

}


LveJSRenderer.prototype.init = init;
LveJSRenderer.prototype.start = start;
LveJSRenderer.prototype.getFPS = getFPS;
LveJSRenderer.prototype.getDrawArguments = getDrawArguments;
LveJSRenderer.prototype.setObject = setObject;
LveJSRenderer.prototype.sortObject = sortObject;
LveJSRenderer.prototype.run = run;
LveJSRenderer.prototype.update = update;
LveJSRenderer.prototype.clearFrame = clearFrame;



export default LveJSRenderer;