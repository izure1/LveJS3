import instanceOf from '../Functions/instanceof';


export default function requestCaching(f = false) {

  if (f) {
    this.renderer.setObject();
    return this;
  }

  this.suppressJob.setSuppress('requestCaching', () => {

    if (!instanceOf(this.usingCamera)) {
      return;
    }

    this.renderer.setObject(this.hashTable.select(), this.usingCamera.scene);

  }, this.renderer.setting.cacheLevel);

};