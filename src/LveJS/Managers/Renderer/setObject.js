export default function setObject(l, level) {

  let levels

  this.objects = []

  levels = level.split('::')

  for (let t of l) {

    level = levels[0]

    for (let i = 0, I = levels.length; i < I; i++) {

      if (
        t.level === level ||
        t.level === 'anywhere' ||
        t.type === 'sprite' ||
        t.animationset.__length
      ) {

        t.__setPhysicsFreeze(false)
        t.__setPhysicsActive('level', true)
        t.__setAudioMute(false)

        this.objects.push(t)
        break

      } else {

        t.__setPhysicsActive('level', false)
        t.__setPhysicsFreeze(true)
        t.__setAudioMute(true)

      }

      if (level[i + 1] !== undefined) {
        level += '::' + levels[i + 1]
      }

    }

  }

  this.sortObject()

}