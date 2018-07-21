import instanceOf from './instanceof';


export default function requestCaching(f = false) {

  if (!instanceOf(this.renderer.camera)) {
    return this;
  }

  if (f) {
    this.renderer.setObject(this.hashTable.select(), this.renderer.camera.scene);
    return this;
  }

  this.suppressJob.setSuppress('requestCaching', () => {

    this.renderer.setObject(this.hashTable.select(), this.renderer.camera.scene);

  }, this.renderer.setting.cacheLevel);
  
  return this;

};