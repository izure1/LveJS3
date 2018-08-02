import {
  text,
  TextInformation
} from '../../Utils/drawCanvas';


// 캔버스가 설정되어있지 않을 경우 화면에 보여질 문장 정보를 정의합니다
let c;
let str;
let camera, camera_x, camera_y, camera_z;

str = new TextInformation('NO CAMERA\n<style fontsize="15" color="gray">지정된 카메라가 없습니다</style>', 0, {
  fontSize: 50,
  color: 'white',
  textAlign: 'center'
});



export default function update(tt = 0) {

  c = this.setting.canvas;
  camera = this.camera;

  // 카메라가 지정되어 있지 않을경우 화면에 카메라 경고 문구를 출력합니다.
  if (!camera) {

    for (let t of this.objects) {
      t.__animationUpdate(tt);
    }

    this.clearFrame('black');
    text(c.context, str, (c.element.width / 2) - (str.width / 2), (c.element.height / 2) - (str.height / 2), {});
    return;

  }


  camera_x = camera.style.left;
  camera_y = camera.style.bottom;
  camera_z = camera.style.perspective;

  // 카메라가 지정되어있을 경우 화면을 초기화하고 객체를 그립니다
  this.clearFrame(this.setting.backgroundColor);

  for (let t of this.objects) {

    // 객체 애니메이션 업데이트
    t.__fireReservation();
    t.__animationUpdate(tt);

    if (t.type === 'camera') continue;

    t.__draw(
      c.context,
      c.element.width,
      c.element.height,
      camera_x,
      camera_y,
      camera_z,
      this.setting.scaleDistance
    );

  }

};