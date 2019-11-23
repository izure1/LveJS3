import each from './each'
import instanceOf from '../Functions/instanceof'
import {
  applyArguments
} from '../Utils/arguments'
import {
  removeDuplicate
} from '../Utils/array'
import calcValue from '../Helpers/calcValue'


export default function follow(u, o) {

  let t
  let d

  t = this.get()

  if (!t) {
    return this
  }

  if (arguments.length === 1) {
    return t.followset.position[u]
  }

  if (!(o instanceof Object)) o = {
    left: 0,
    bottom: 0,
    perspective: 0,
  }

  if (typeof u === 'string') {
    u = this.__system__.world.hashTable.select(u)
    u = u[0]
  }

  if (!instanceOf(u)) {
    return this
  }

  each.call(this, function () {

    if (this === u) {
      this.followset.following = null
      return
    }

    u.followset.follower.push(this.name)

    d = calcValue.call(this, o, this.followset.position)
    applyArguments.call(this.followset.position, d)

    this.followset.following = u.name
    this.__followUpdateFromObj(u)

    // follow, followed 이벤트를 발생시킵니다
    this.emit('follow', {
      from: u
    })
    u.emit('followed', {
      from: this
    })

  })

  u.followset.follower = removeDuplicate(u.followset.follower)

  return this

}