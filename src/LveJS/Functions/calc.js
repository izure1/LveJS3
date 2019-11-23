import instanceOf from './instanceof'

import DEFAULT_STYLE from '../Methods/Vars/DEFAULT_STYLE'
import DEFAULT_STYLE_CONSTANT from '../Methods/Vars/DEFAULT_STYLE_CONSTANT'


function getCalcedProperties(o, s) {

  for (let p in o) {

    if (!(typeof o[p] === 'number')) {
      continue
    }

    if (p in DEFAULT_STYLE_CONSTANT) {
      continue
    }

    o[p] *= s

  }

  return o

}

function getRefinedProperties(o, ps) {

  o = Object.assign({}, o)

  for (let p in o) {

    if (!ps.includes(p)) {
      delete o[p]
    }

  }

  return o

}


export default function calc(left, bottom, perspective, o, c = this.renderer.camera) {

  let ps
  let s, d

  if (!instanceOf(c)) {
    c = this.hashTable.select(c)
    c = c[0]
  }

  c = this.renderer.getRenderStates(c)

  if (!c.ready) {
    return null
  }

  c = c.value

  ps = Object.keys(o).concat('left', 'bottom', 'perspective')
  // 기본 스타일값과 매개변수로 넘겨받은 스타일 값을 병합합니다.
  o = Object.assign({}, o)
  o = Object.assign(new DEFAULT_STYLE, o)


  // 카메라 기본 시야각거리와 z좌표와의 거리를 계산하여 비율을 얻습니다.
  d  = this.renderer.setting.scaleDistance
  d = d / ((d - c[6]) / d)
  s = perspective / d

  o.left = left
  o.bottom = bottom
  o.perspective = perspective

  switch (o.position) {

    case 'absolute':

      o = getCalcedProperties(o, s)

      o.left -= this.renderer.setting.originWidth / 2
      o.left *= s
      o.left += (o.width * o.scale) / 2

      o.bottom -= this.renderer.setting.originHeight / 2
      o.bottom *= s

      o.perspective = perspective

      // Apply camera axis
      o.left += c[4]
      o.bottom += c[5]

      break

    case 'fixed':
      break

  }

  // Remove undefined properties
  return getRefinedProperties(o, ps)

}