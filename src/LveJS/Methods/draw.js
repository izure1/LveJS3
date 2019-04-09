import {
  getScale,
  getPosition,
  getAABB
} from '../Utils/vertex'

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
} from '../Utils/drawCanvas'


const VERTEX = {}

VERTEX.absolute = getPosition
VERTEX.fixed = getAABB


/**
 * 
 * @param {HTMLCanvasElement} canvas Drawing Canvas
 * @param {Number} canvasWidth Canvas width
 * @param {Number} canvasHeight Canvas height
 * @param {Number} cameraHeight Camera height
 * @param {Number} cameraX Camera axis x
 * @param {Number} cameraY Camera axis y
 * @param {Number} cameraZ Camera axis z
 * @param {Number} cameraRotate Camera rotation
 * @param {Number} distance Scale distance
 * @param {Number} alpha Alpha color
 * 
 */
export default function draw(canvas, canvasWidth, canvasHeight, cameraHeight, cameraX, cameraY, cameraZ, cameraRotate, distance, alpha = 1) {

  let style, style_s, sprite, pos, transition

  style = this.style
  style_s = this.__system__.style
  sprite = this.__system__.sprite
  pos = this.__system__.position
  transition = this.__system__.transition

  // 카메라와 객체의 정보를 이용해 캔버스 내의 x, y 절대좌표와 그리기 비율을 구합니다
  let drawWidth, drawHeight, drawColor, rotateInfo
  let drawShadowBlur, drawShadowColor, drawShadowOffsetX, drawShadowOffsetY, drawBorderWidth, drawBorderColor
  let X, Y, S
  let {
    x,
    y,
    s
  } = VERTEX[style.position](canvasWidth, canvasHeight, style.left, style.bottom, style.perspective, cameraX, cameraY, cameraZ, distance)

  X = x
  Y = y
  S = s

  // 카메라보다 뒤에 있는 객체는 그리기를 중단합니다
  if (s <= 0) {
    return
  }

  S =
    s =
    s * style_s.scale

  // position Fixed / verticalAlign 등의 요소를 고려하여 좌표를 보정합니다.
  // fx, fy 변수가 사용됩니다.
  x -= s * style_s.width * style_s.fx
  y -= s * style_s.height * style_s.fy

  // 그리기 비율을 곱해 실제 크기를 구합니다
  drawWidth = style_s.width * s
  drawHeight = style_s.height * s
  drawColor = style.color

  drawShadowColor = style.shadowColor
  drawShadowBlur = style.shadowBlur * s
  drawShadowOffsetX = style.shadowOffsetX * s
  drawShadowOffsetY = style.shadowOffsetY * s

  drawBorderColor = style.borderColor
  drawBorderWidth = style.borderWidth * s


  // 투명도를 지정합니다
  let opacity
  let opacity_transition

  opacity_transition = transition.opacity()

  opacity = alpha
  opacity = alpha * style.opacity * opacity_transition


  // 알파값 지정 및 회전 알고리즘을 적용합니다
  setBlur(canvas, style.blur)
  setAlpha(canvas, opacity)
  setShadow(canvas, drawShadowBlur, drawShadowColor, drawShadowOffsetX, drawShadowOffsetY)

  rotateInfo = setRotate(canvas, drawWidth, drawHeight, x, y, style.rotate, style_s.rx, style_s.ry, cameraRotate)
  

  pos.x = x
  pos.y = y
  pos.s = s
  x = rotateInfo.x
  y = rotateInfo.y


  if (style.gradient.__length) {

    drawColor = getGradient(canvas, style.gradient, style.gradientType, style.gradientDirection, drawWidth, drawHeight, x, y)

  }

  switch (this.type) {

    case 'square':
      borderSquare(canvas, drawWidth, drawHeight, x, y, drawBorderWidth, drawBorderColor)
      square(canvas, drawWidth, drawHeight, drawColor, x, y)
      break

    case 'circle':
      borderCircle(canvas, drawWidth, drawHeight, x, y, drawBorderWidth, drawBorderColor)
      circle(canvas, drawWidth, drawHeight, drawColor, x, y)
      break

    case 'image':

      if (!this.element) {
        break
      }

      borderSquare(canvas, drawWidth, drawHeight, x, y, drawBorderWidth, drawBorderColor)
      image(canvas, this.element, drawWidth, drawHeight, x, y, 0, 0, this.element.naturalWidth, this.element.naturalHeight)

      // 트랜지션 이미지를 그립니다
      if (!transition.isRunning('image_origin')) {
        break
      }

      let transImage = transition.image_origin.element

      // 트랜지션 이미지의 좌표를 보정합니다
      transImage._w = S * transition.image_origin.width
      transImage._h = S * transition.image_origin.height
      transImage._x = X - (transImage._w * style_s.fx)
      transImage._y = Y - (transImage._h * style_s.fy)

      rotateInfo = canvas.setTransform(1, 0, 0, 1, 0, 0)
      rotateInfo = setRotate(canvas, transImage._w, transImage._h, transImage._x, transImage._y, style.rotate, style_s.rx, style_s.ry)

      setAlpha(canvas, alpha * (1 - opacity_transition) * style.opacity)
      image(canvas, transImage, transImage._w, transImage._h, rotateInfo.x, rotateInfo.y, 0, 0, transImage.naturalWidth, transImage.naturalHeight)
      break

    case 'text':
      if (!this.__system__.text.information) {
        break
      }
      this.__system__.text.information.setScale(s)
      borderText(canvas, this.__system__.text.information, x, y)
      text(canvas, this.__system__.text.information, x, y)
      break

    case 'video':
      if (!this.element) {
        break
      }
      borderSquare(canvas, drawWidth, drawHeight, x, y, drawBorderWidth, drawBorderColor)
      image(canvas, this.element, drawWidth, drawHeight, x, y, 0, 0, this.element.videoWidth, this.element.videoHeight)
      break

    case 'sprite':
      if (!this.element) {
        break
      }
      borderSquare(canvas, drawWidth, drawHeight, x, y, drawBorderWidth, drawBorderColor)
      image(canvas, this.element, drawWidth, drawHeight, x, y, this.spriteset.current * sprite.width, 0, sprite.width, sprite.height)
      break

  }


  this.__system__.world.renderer.subjects.push(this)

  return this

}