export default function getSceneObj(u) {

  let r;
  let scenes, scene;

  r = [];
  scenes = u.split('::');

  for (let t of this) {

    scene = scenes[0];

    for (let j = 0, len_j = scenes.length; j < len_j; j++) {

      if (
        t.scene === scene ||
        t.scene === 'anywhere'
      ) {
        r.push(t);
        break;
      }

      if (scenes[j + 1] !== undefined) {
        scene += `::${scenes[j + 1]}`;
      }

    }

  }

  return r;
  
};