import DeltaTimer from '../Utils/DeltaTimer';

import init from './Renderer/init';
import getFPS from './Renderer/getFPS';
import setObject from './Renderer/setObject';
import sortObject from './Renderer/sortObject';

import DEFAULT_SETTING from './Renderer/Vars/DEFAULT_SETTING';


class LveJSRenderer {

  constructor() {
    this.setting = {};
    this.objects = [];
    this.deltaTimer = new DeltaTimer();
  }

}


LveJSRenderer.prototype.init = init;
LveJSRenderer.prototype.getFPS = getFPS;
LveJSRenderer.prototype.setObject = setObject;
LveJSRenderer.prototype.sortObject = sortObject;



export default LveJSRenderer;