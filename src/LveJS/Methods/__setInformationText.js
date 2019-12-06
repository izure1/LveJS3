import {
  TextInformation
} from '../Utils/drawCanvas'
import {
  SET_INFORMATION_TEXT as JOB_SYMBOL
} from './Vars/SYMBOL'


export default function __setInformationText() {

  // fontSize, fontFamily, fontStyle, fontWeight, textAlign, lineHeight, color
  let fontSize, fontFamily, fontStyle, fontWeight, textAlign, lineHeight, color, borderWidth, borderColor
  let t
  let str, w

  this.__system__.suppressJob.set(JOB_SYMBOL, () => {

    fontSize = this.style.fontSize
    fontFamily = this.style.fontFamily
    fontStyle = this.style.fontStyle
    fontWeight = this.style.fontWeight
    textAlign = this.style.textAlign
    lineHeight = this.style.lineHeight
    borderWidth = this.style.borderWidth
    borderColor = this.style.borderColor
    color = this.style.color

    str = this.text + ''
    w = this.style.width

    if (this.type !== 'text') {
      return this
    }

    if (w === 'auto') {
      w = -1
    }

    t = new TextInformation(str, w, {
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      color,
      textAlign,
      lineHeight,
      borderWidth,
      borderColor
    })

    this.__system__.text.information = t
    this.__system__.style.width = t.maxWidth
    this.__system__.style.height = t.height

    this.emit('change', this)
    this.__setPhysicsFixture()

  }, 1)

  return this

}