import LveJSVector from '../../LveJSVector'
import createUUID from '../../Utils/CreateUUID'


export default function add(start, end, duration, easing, runtime) {

  let id

  id = createUUID()
  this.list[id] = new LveJSVector(...arguments)

  return id

}