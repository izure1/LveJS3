import {
  TextInformation
} from '../Utils/drawCanvas';


export default function __setInformation_text() {

  // fontSize, fontFamily, fontStyle, fontWeight, textAlign, lineHeight, color
  let fontSize, fontFamily, fontStyle, fontWeight, textAlign, lineHeight, color;
  let t;
  let str, w;

  this.__system__.suppressJob.reserve('setTextInformation', () => {

    fontSize = this.style.fontSize;
    fontFamily = this.style.fontFamily;
    fontStyle = this.style.fontStyle;
    fontWeight = this.style.fontWeight;
    textAlign = this.style.textAlign;
    lineHeight = this.style.lineHeight;
    color = this.style.color;

    str = this.text || '';
    w = this.style.width;

    if (w === 'auto') {
      w = -1;
    }

    t = new TextInformation(str, w, {
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      color,
      textAlign,
      lineHeight
    });

    this.__system__.text.information = t;
    this.__system__.style.width = t.width;
    this.__system__.style.height = t.height;

  });

  return this;

};