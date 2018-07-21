export default function update(tt = 0) {

  // 카메라가 지정되어 있지 않을경우 화면에 카메라 경고 문구를 출력합니다.
  if (!this.camera) {

    for (let t of this.objects) {
      t.__animationUpdate(tt);
    }

    this.showEmptyFrame();
    return;

  }


  for (let t of this.objects) {

    t.__animationUpdate(tt);
    t.__draw();

  }

};