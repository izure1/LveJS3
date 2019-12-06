import instanceOf from './instanceof'

const JOB_SYMBOL = Symbol('requestCaching')

export default function requestCaching(f = false) {

  if (!instanceOf(this.renderer.camera)) {
    return this.lve
  }

  if (f) {
    this.renderer.setObject(this.hashTable.select(), this.renderer.camera.level)
    this.suppressJob.clear(JOB_SYMBOL)
    return this.lve
  }

  this.suppressJob.set(JOB_SYMBOL, () => {

    if (!instanceOf(this.renderer.camera)) {
      return
    }

    this.renderer.setObject(this.hashTable.select(), this.renderer.camera.level)

  }, this.renderer.setting.cacheLevel)

  return this.lve

}