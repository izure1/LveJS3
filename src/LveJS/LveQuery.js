import getLevelObj from './Helpers/getLevelObj'
import instanceOf from './Functions/instanceof'


function getObjectWithoutGhost(u) {
  return this.hashTable.select(u).filter(t => !t.__system__.ghost)
}

export default function LveQuery(u) {

  let r
  let camera

  camera = this.lve.current.camera

  /*
   *  문자열로 검색하거나, 숫자 등 단말노드로 검색했을 때
   * 
   */
  switch (typeof u) {
    case 'number':
      u += ''
    case 'string': {
      switch (u) {
        case '*': {
          r = getObjectWithoutGhost.call(this)
          break
        }
        case '[CURRENT_LEVEL]': {
          r = getLevelObj.call(getObjectWithoutGhost.call(this), camera.level)
          break
        }
        case '[current_level]': {
          r = getLevelObj.call(getObjectWithoutGhost.call(this), camera.level)
          break
        }
        case '[USING_CAMERA]': {
          if (instanceOf(camera)) {
            r = [camera]
          }
          break
        }
        case '[using_camera]': {
          if (instanceOf(camera)) {
            r = [camera]
          }
          break
        }
        default: {
          r = getObjectWithoutGhost.call(this, u)
          break
        }
      }
      break
    }

    /*
     *  Objects, 또는 LveJSObjectSession으로 검색했을 때
     * 
     */
    default: {
      // session
      if ('context' in u) {
        r = u.context
        u = u.name
      } else {
        // Objects
        if (lve.instanceof(u)) {
          r = [u]
          u = u.name
        }
        // 잘못된 검색 시도
        else {
          r = null
          u = null
        }
      }
      break
    }
  }

  return r

}