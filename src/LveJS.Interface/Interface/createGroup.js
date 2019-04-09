import LveJSInterfaceGroup from '../InterfaceGroup'


export default function createGroup() {

  let t

  t = new LveJSInterfaceGroup(this)
  this.groups.push(t)

  return t

}