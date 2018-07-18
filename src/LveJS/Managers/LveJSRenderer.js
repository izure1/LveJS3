import DeltaTimer from '../Utils/DeltaTimer';

import init from './Renderer/init';
import getFPS from './Renderer/getFPS';

import DEFAULT_SETTING from './Renderer/Vars/DEFAULT_SETTING';


class LveJSRenderer {

  constructor() {
    this.setting = {};
    this.deltaTimer = new DeltaTimer();
  }

}


LveJSRenderer.prototype.init = init;
LveJSRenderer.prototype.getFPS = getFPS;



export default LveJSRenderer;