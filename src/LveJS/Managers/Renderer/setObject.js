export default function setObject(l, scene) {

  let scenes

  this.objects = []

  scenes = scene.split('::')

  for (let t of l) {

    scene = scenes[0]

    for (let i = 0, I = scenes.length; i < I; i++) {

      if (
        t.scene === scene ||
        t.scene === 'anywhere' ||
        t.type === 'sprite' ||
        t.animationset.__length
      ) {

        t.__setPhysicsFreeze(false)
        t.__setPhysicsActive('scene', true)
        t.__setAudioMute(false)

        this.objects.push(t)
        break

      } else {

        t.__setPhysicsActive('scene', false)
        t.__setPhysicsFreeze(true)
        t.__setAudioMute(true)

      }

      if (scene[i + 1] !== undefined) {
        scene += '::' + scenes[i + 1]
      }

    }

  }

  this.sortObject()

}