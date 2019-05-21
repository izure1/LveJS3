import DEFAULT_STYLE_CONTSTANT from './DEFAULT_STYLE_CONSTANT'


export default function () {

  this.fontSize = 50
  this.fontFamily = 'arial, sans-serif'
  this.fontWeight = 'normal'
  this.fontStyle = 'normal'
  this.textAlign = 'left'
  this.width = 100
  this.height = 100
  this.color = 'black'
  this.borderColor = 'black'
  this.shadowColor = 'black'
  this.borderWidth = 0
  this.shadowBlur = 0
  this.shadowOffsetX = 0
  this.shadowOffsetY = 0
  this.position = 'absolute'
  this.blur = 0
  this.gradientType = 'linear'
  this.gradient = {}
  this.pointerEvents = true
  this.display = 'block'
  this.lineHeight = '100%'
  this.verticalAlign = 'top'
  this.cursor = 'auto'
  this.margin = '0 0 0 0'
  this.marginLeft = 0
  this.marginRight = 0
  this.marginTop = 0
  this.marginBottom = 0

  Object.assign(this, DEFAULT_STYLE_CONTSTANT)

}