import each from './each'
import getSceneObj from '../Helpers/getSceneObj'
import {
  removeDuplicate
} from '../Utils/array'


/**
 * 
 * @param {String|Array} u 씬 이름
 * @param {Boolean} a 하위 씬에 존재하는 객체도 포함합니다
 */
export default function In(u, a = false) {

  let r
  let w
  let s

  r = []
  w = this.__system__.world

  // 'main main_another' 같이 여러 씬을 공백으로 구분한 문자열을 배열로 치환합니다.
  if (typeof u === 'string') {
    u = u.split(' ')
  }

  if (a) {

    each.call(this, function () {

      u.push(this.scene)

    })

  }

  u = removeDuplicate(u)

  for (let t of u) {

    r = [...r, ...getSceneObj.call(this.context, t)]

  }

  r = removeDuplicate(r)

  return new w.classes.LveJSObjectSession(w, this.name, r)

}