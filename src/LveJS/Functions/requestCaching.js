import instanceOf from './instanceof';


export default function requestCaching(f = false) {

  if (!instanceOf(this.renderer.camera)) {
    return this.lve;
  }

  if (f) {
    this.renderer.setObject(this.hashTable.select(), this.renderer.camera.scene);
    return this.lve;
  }

  this.suppressJob.setSuppress('requestCaching', () => {

    if (!instanceOf(this.renderer.camera)) {
      return;
    }

    this.renderer.setObject(this.hashTable.select(), this.renderer.camera.scene);

  }, this.renderer.setting.cacheLevel);

  return this.lve;

};