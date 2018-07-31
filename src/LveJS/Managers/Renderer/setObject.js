export default function setObject(l, scene) {

  let scenes;
  let c;

  this.objects = [];

  scenes = scene.split('::');

  for (let t of l) {

    scene = scenes[0];

    for (let i = 0, I = scenes.length; i < I; i++) {

      if (
        t.scene === scene ||
        t.scene === 'anywhere' ||
        t.type === 'sprite' && t.__system__.sprite.playing ||
        t.animationset.__length
      ) {
        this.objects.push(t);
        break;
      }

      if (scene[i + 1] !== undefined) {
        scene += '::' + scenes[i + 1];
      }

    }

  }

  // if (cache.objectArr.indexOf(cache.mouseoverItem) === -1 && lve.instanceof(cache.mouse)) {
  //   cache.objectArr.push(cache.mouseoverItem);
  // }

  this.sortObject();

};