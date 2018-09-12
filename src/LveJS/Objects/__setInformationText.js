import {
  TextInformation
} from '../Utils/drawCanvas';


export default function __setInformationText() {

  // fontSize, fontFamily, fontStyle, fontWeight, textAlign, lineHeight, color
  let fontSize, fontFamily, fontStyle, fontWeight, textAlign, lineHeight, color;
  let t;
  let str, w;
  let st;

  st = this.__system__.style;

  fontSize = st.fontSize;
  fontFamily = st.fontFamily;
  fontStyle = st.fontStyle;
  fontWeight = st.fontWeight;
  textAlign = st.textAlign;
  lineHeight = st.lineHeight;
  color = st.color;

  str = this.text || '';
  w = this.style.width;

  if (this.type !== 'text') {
    return this;
  }

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
  this.__system__.style.width = t.maxWidth;
  this.__system__.style.height = t.height;

  return this;

};