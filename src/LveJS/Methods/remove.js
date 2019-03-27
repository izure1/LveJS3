import each from './each'



function removeElement(w) {

  if (this.element && this.element.play) {

    w.lve.start(() => {
      w.canvas.appendChild(this.element)
      w.canvas.removeChild(this.element)
    })

  }

}


function removeMouseSelected(w) {

  if (this === w.cache.mouseSelected) {
    w.cache.mouseSelected = null
  }

}


function removeFollower(w) {

  let r

  for (let t of this.followset.follower) {

    r = w.hashTable.select(t)
    r = r[0]

    if (r) r.unfollow()

  }

}

export default function remove(includefollower = false) {

  let w
  let isInclude

  w = this.__system__.world

  each.call(this, function () {

    if (this === w.renderer.camera) {
      w.renderer.camera = null
    }

    isInclude = includefollower

    if (includefollower && includefollower.call) {
      isInclude = includefollower.call(this, this)
    }

    if (isInclude) {
      this.follower().remove(includefollower)
    }

    // HTML Element를 삭제합니다.
    // Video 태그는 사운드와 메모리를 삭제하기 위해 Document에 추가한 뒤에 삭제합니다.
    removeElement.call(this, w)

    // 삭제되는 아이템이 mouseSelected 객체일 경우 삭제합니다.
    removeMouseSelected.call(this, w)

    // Following 객체들은 매개변수에 따라 삭제가 결정됩니다.
    removeFollower.call(this, w)

    // 물리 효과를 제거합니다.
    this.__setPhysicsDestroy()

    // 오브젝트 목록에서 제거합니다.
    w.hashTable.delete(this.name)

  })

  w.lve.requestCaching()

  return this

}