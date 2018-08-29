import {
  getScale,
  getPosition,
  getAABB
} from '../Utils/vertex';

import {
  getGradient,
  setRotate,
  setAlpha,
  setBlur,
  borderCircle,
  borderSquare,
  borderText,
  setShadow,
  square,
  circle,
  text,
  image
} from '../Utils/drawCanvas';


const VERTEX = {};

VERTEX.absolute = getPosition;
VERTEX.fixed = getAABB;


/**
 * 
 * @param {HTMLCanvasElement} c Drawing Canvas
 * @param {Number} w Canvas width
 * @param {Number} h Canvas height
 * @param {Number} ax Camera axis x
 * @param {Number} ay Camera axis y
 * @param {Number} az Camera axis z
 * @param {Number} sd Scale distance
 * @param {Number} a Alpha color
 */
export default function __draw(c, cw, ch, ax, ay, az, sd, a = 1) {

  let st, st_;

  st = this.style;
  st_ = this.__system__.style;

  // 카메라와 객체의 정보를 이용해 캔버스 내의 x, y 절대좌표와 그리기 비율을 구합니다
  let w, h, l, r;
  let sb, sc, sx, sy, bw, bc;
  let {
    x,
    y,
    s
  } = VERTEX[st.position](cw, ch, st.left, st.bottom, st.perspective, ax, ay, az, sd);

  // 카메라보다 뒤에 있는 객체는 그리기를 중단합니다
  if (s <= 0) {
    return;
  }

  s = s * st_.scale;

  // position Fixed / verticalAlign 등의 요소를 고려하여 좌표를 보정합니다.
  // fx, fy 변수가 사용됩니다.
  x -= s * st_.width * st_.fx;
  y -= s * st_.height * st_.fy;

  // 그리기 비율을 곱해 실제 크기를 구합니다
  w = st_.width * s;
  h = st_.height * s;
  l = st.color;

  sc = st.shadowColor;
  sb = st.shadowBlur * s;
  sx = st.shadowOffsetX * s;
  sy = st.shadowOffsetY * s;

  bc = st.borderColor;
  bw = st.borderWidth * s;

  // 알파값 지정 및 회전 알고리즘을 적용합니다
  r = setBlur(c, st.blur);
  r = setAlpha(c, a * st.opacity);
  r = setRotate(c, w, h, x, y, st.rotate, st_.rx, st_.ry);

  setShadow(c, sb, sc, sx, sy);

  x = r.x;
  y = r.y;

  if (st.gradient.__length) {

    l = getGradient(c, st.gradient, st.gradientType, st.gradientDirection, w, h, x, y);

  }

  switch (this.type) {

    case 'square':
      borderSquare(c, w, h, x, y, bw, bc);
      square(c, w, h, l, x, y);
      break;

    case 'circle':
      borderCircle(c, w, h, x, y, bw, bc);
      circle(c, w, h, l, x, y);
      break;

    case 'image':
      if (!this.element) {
        return;
      }
      borderSquare(c, w, h, x, y, bw, bc);
      image(c, this.element, w, h, x, y);
      break;

    case 'text':
      if (!this.__system__.text.information) {
        return;
      }
      borderText(c, this.__system__.text.information.setScale(s), x, y, bw, bc);
      text(c, this.__system__.text.information, x, y);
      break;

    case 'video':
      if (!this.element) {
        return;
      }
      borderSquare(c, w, h, x, y, bw, bc);
      image(c, this.element, w, h, x, y);
      break;

    case 'sprite':
      break;

  }

  c.setTransform(1, 0, 0, 1, 0, 0);

  return this;

};