import LveJSManager from './LveJSManager'

import initLve from './ParticleEmitter/initLve'
import generate from './ParticleEmitter/generate'
import update from './ParticleEmitter/update'


class LveJSParticleEmitter extends LveJSManager {

  constructor(lve) {

    super()
    this.particle = new Set
    this.lve = lve

  }

}


LveJSParticleEmitter.prototype.initLve = initLve
LveJSParticleEmitter.prototype.generate = generate
LveJSParticleEmitter.prototype.update = update


export default LveJSParticleEmitter