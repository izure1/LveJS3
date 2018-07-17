import DeltaTimer from '../Utils/DeltaTimer';
import getFPS from './Renderer/getFPS';


class LveJSRenderer {

  constructor() {
    this.canvas = null;
    this.deltaTimer = new DeltaTimer();
  }

}


LveJSRenderer.prototype.getFPS = getFPS;



export default LveJSRenderer;