import instanceOf from './instanceof'


export default function requestCaching(f = false) {

  if (!instanceOf(this.renderer.camera)) {
    return this.lve
  }

  if (f) {
    this.renderer.setObject(this.hashTable.select(), this.renderer.camera.level)
    this.suppressJob.clear('requestCaching')
    return this.lve
  }

  this.suppressJob.set('requestCaching', () => {

    if (!instanceOf(this.renderer.camera)) {
      return
    }

    this.renderer.setObject(this.hashTable.select(), this.renderer.camera.level)

  }, this.renderer.setting.cacheLevel)

  return this.lve

}