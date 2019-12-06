import HANDLERS from '../Managers/ElementListener/Vars/HANDLERS'


/**
 * 
 * @description
 * Destroy the current world completely
 * 
 */
export default function destroy(includeAsset = true) {

  // 각 리스너에 할당된 이벤트리스너를 제거합니다
  this.canvasListener.destroy()
  this.mouseListener.destroy()
  this.keyboardListener.destroy()

  // 생성된 모든 에셋을 파괴합니다
  if (includeAsset) this.lve.destroyAsset()
  this.assetManager.destroy()

  
  // 캔버스에 할당된 옵저버를 제거합니다
  for (let p of this.canvasObserver.handler.keys()) {
    //this.canvasObserver.disconnect(p)
    this.canvasObserver.destroy()
  }

  // 모든 객체를 삭제합니다
  for (let t of this.hashTable.select()) {
    t.remove()
  }

  // 모든 물리객체를 삭제합니다
  this.physics.lockRelease.done()

  // 모든 매니저의 작동을 중지합니다
  this.renderer.isRunning = false
  this.physics.isRunning = false

  this.renderer.clearFrame('transparent')

}