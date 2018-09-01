import addEventListener from './Emitter/addEventListener';
import removeEventListener from './Emitter/removeEventListener';
import __from from './Emitter/from';


class LveJSEmitter {

  constructor() {

    this.global = {};

  }

}

LveJSEmitter.prototype.addEventListener = addEventListener;
LveJSEmitter.prototype.removeEventListener = removeEventListener;
LveJSEmitter.prototype.from = __from;


export default LveJSEmitter;