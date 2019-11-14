import {
  getPosition,
  getAABB
} from '../Utils/vertex'

import {
  getGradient,
  setRotate,
  setAlpha,
  setBlur,
  setBlendMode,
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
 * @param {Number} interval Rendering interval
 * @param {Number} alpha Alpha color
 * 
 */
export default function draw(canvas, canvasWidth, canvasHeight, cameraHeight, cameraX, cameraY, cameraZ, cameraRotate, distance, canvasScale, interval, alpha = 1) {

  let {
    style,
    position,
    transition
  } = this.__system__

  let tStyle = this.style

  // 카메라와 객체의 정보를 이용해 캔버스 내의 x, y 절대좌표와 그리기 비율을 구합니다
  let drawWidth, drawHeight, drawColor, rotateInfo
  let drawBorderWidth, drawBorderColor

  let {
    x,
    y,
    s,
    X = x,
    Y = y,
    S = s,
  } = VERTEX[tStyle.position](canvasWidth, canvasHeight, tStyle.left, tStyle.bottom, tStyle.perspective, cameraX, cameraY, cameraZ, distance, canvasScale)

  S = s *= style.scale


  // position Fixed / verticalAlign 등의 요소를 고려하여 좌표를 보정합니다.
  // fx, fy 변수가 사용됩니다.
  x -= s * style.width * style.fx
  y -= s * style.height * style.fy


  // 그리기 비율을 곱해 실제 크기를 구합니다
  drawWidth = style.width * s
  drawHeight = style.height * s
  drawColor = tStyle.color

  drawBorderColor = tStyle.borderColor
  drawBorderWidth = tStyle.borderWidth * s


  // 카메라보다 뒤에 있는 객체는 그리기를 중단합니다
  if (s <= 0) {
    return
  }


  // 알파값 지정 및 회전 알고리즘을 적용합니다
  setBlur(canvas, tStyle.blur)


  // 투명도를 지정합니다
  let opacity
  let opacity_transition

  opacity_transition = transition.opacity()
  opacity = alpha
  opacity = alpha * tStyle.opacity * opacity_transition

  setAlpha(canvas, opacity)


  // 그림자를 지정합니다
  let sc, sb, sx, sy

  sc = tStyle.shadowColor
  sb = tStyle.shadowBlur * s
  sx = tStyle.shadowOffsetX * s
  sy = tStyle.shadowOffsetY * s

  setShadow(canvas, sb, sc, sx, sy)


  // 블렌드 모드를 지정합니다
  setBlendMode(canvas, tStyle.blendMode)


  // 회전각도를 지정합니다
  rotateInfo = setRotate(canvas, drawWidth, drawHeight, x, y, tStyle.rotate, style.rx, style.ry, cameraRotate)


  // 객체의 화면 캔버스 좌표 X, Y 를 객체에 캐싱합니다
  position.x = x
  position.y = y
  position.s = s

  x = rotateInfo.x
  y = rotateInfo.y


  // 그라디언트가 지정되어있다면 그라디언트 색상 정보를 받아옵니다
  if (tStyle.gradient.__length) {

    drawColor = getGradient(canvas, tStyle.gradient, tStyle.gradientType, tStyle.gradientDirection, drawWidth, drawHeight, x, y)

  }


  // 각 객체 유형에 맞는 그리기 방법을 택합니다
  switch (this.type) {

    case 'square':

      borderSquare(canvas, drawWidth, drawHeight, x, y, drawBorderWidth, drawBorderColor)
      square(canvas, drawWidth, drawHeight, drawColor, x, y)
      break


    case 'circle':

      borderCircle(canvas, drawWidth, drawHeight, x, y, drawBorderWidth, drawBorderColor)
      circle(canvas, drawWidth, drawHeight, drawColor, x, y)
      break


    case 'text':

      if (!this.__system__.text.information) return

      this.__system__.text.information.setScale(s)

      borderText(canvas, this.__system__.text.information, x, y)
      text(canvas, this.__system__.text.information, x, y)
      break


    case 'image':

      if (!this.element) return this
      if (!this.element.__isLoaded) return this

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
      transImage._x = X - (transImage._w * style.fx)
      transImage._y = Y - (transImage._h * style.fy)

      rotateInfo = canvas.setTransform(1, 0, 0, 1, 0, 0)
      rotateInfo = setRotate(canvas, transImage._w, transImage._h, transImage._x, transImage._y, tStyle.rotate, style.rx, style.ry)

      setAlpha(canvas, alpha * (1 - opacity_transition) * tStyle.opacity)
      image(canvas, transImage, transImage._w, transImage._h, rotateInfo.x, rotateInfo.y, 0, 0, transImage.naturalWidth, transImage.naturalHeight)
      break


    case 'video':

      if (!this.element) return this
      if (!this.element.__isLoaded) return this

      borderSquare(canvas, drawWidth, drawHeight, x, y, drawBorderWidth, drawBorderColor)
      image(canvas, this.element, drawWidth, drawHeight, x, y, 0, 0, this.element.videoWidth, this.element.videoHeight)
      break


    case 'sprite':

      if (!this.spriteset.name) return this

      let motion, sprite

      motion = this.spriteset.name
      sprite = this.__system__.world.spriteManager.get(motion)

      if (!sprite || !sprite.ready) return this

      borderSquare(canvas, drawWidth, drawHeight, x, y, drawBorderWidth, drawBorderColor)
      image(canvas, sprite.element, drawWidth, drawHeight, x, y, this.spriteset.current * sprite.width, 0, sprite.width, sprite.height)
      break


    case 'particle':

      this.__generateParticle(interval)
      break

  }


  // 화면에 그려진 목록에 추가합니다
  this.__system__.world.renderer.subjects.push(this)
  return this

}