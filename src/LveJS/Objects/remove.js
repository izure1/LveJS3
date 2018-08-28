import each from './each';


export default function remove() {

  let w;

  w = this.__system__.world;

  each.call(this, function () {

    if (this === w.renderer.camera) {
      w.renderer.camera = null;
    }

    w.hashTable.delete(this.name);
    w.lve.requestCaching();

    this.__system__.suppressJob.setSuppress('remove', () => {

      w.physics.destroyObject(this.__system__.physics.body);

    }, 1);

  });

  return this;

};