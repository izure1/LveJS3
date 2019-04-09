export default function __init() {

  let c

  this.lve.extendDrawEnd(tt => {

    c = this.lve.getRenderStates()

    if (!c.ready) {
      return
    }

    for (let group of this.groups) {

      for (let t of group.object.values()) {
        t.forceUpdate(tt)
        t.draw(...c.value)
      }

    }

  })

}