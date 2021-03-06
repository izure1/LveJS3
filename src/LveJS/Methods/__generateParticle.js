export default function __generateParticle(tt) {

  if (!this.particleset.playing) {
    return this
  }

  this.__system__.particle.count -= tt;

  if (this.__system__.particle.count < 0) {
    this.__system__.particle.count = this.particleset.interval
    this.__system__.world.particleEmitter.generate(this)
  }

  return this

}