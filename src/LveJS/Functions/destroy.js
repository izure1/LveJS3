import HANDLERS from '../Managers/Listener/Vars/HANDLERS';


export default function destroy() {

  // 캔버스에 할당된 이벤트리스너를 제거합니다.
  for (let p in HANDLERS) {

    this.listener.removeListener(p);

  }

  // 모든 객체를 삭제합니다.
  for (let t of this.hashTable.select()) {
    t.remove();
  }

  // 모든 매니저의 작동을 중지합니다.
  this.renderer.isRunning = false;
  this.physics.isRunning = false;

};