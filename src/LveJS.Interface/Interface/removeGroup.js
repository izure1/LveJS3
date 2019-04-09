export default function removeGroup(t) {

  let i
  let group

  i = this.groups.length

  while (i--) {

    group = this.groups[i]

    if (group !== t) {
      continue
    }

    for (let u of group.object.keys()) {
      group.removeContent(u)
    }

    this.groups.splice(i, 1)
    break

  }

}