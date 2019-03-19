const d3Color = require('d3-color')

/*
 *  Draw Canvas
 *  v1.0.0
 * 
 *  MIT LICENSE
 *  https://izure.org
 * 
 */

function degToRad(d) {
  return d * Math.PI / 180
}

/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Object} g Gradient information Object
 * @param {String} p Gradient type
 * @param {Number} r Gradient rotation
 * @param {Number} w Object width
 * @param {Number} h Object height
 * @param {Number} x Object axis X
 * @param {Number} y Object axis Y
 * @param {Number} f Object axis X revision
 */
function getGradient(c, g, p, r, w, h, x, y, f = 0) {

  let grd

  switch (p) {
    case 'linear':
      {
        let x1, x2, y1, y2

        if (0 <= r && r < 45) {
          x1 = 0
          y1 = h / 2 * (45 - r) / 45
          x2 = w
          y2 = h - y1
        } else if ((45 <= r && r < 135)) {
          x1 = w * (r - 45) / (135 - 45)
          y1 = 0
          x2 = w - x1
          y2 = h
        } else if ((135 <= r && r < 225)) {
          x1 = w
          y1 = h * (r - 135) / (225 - 135)
          x2 = 0
          y2 = h - y1
        } else if ((225 <= r && r < 315)) {
          x1 = w * (1 - (r - 225) / (315 - 225))
          y1 = h
          x2 = w - x1
          y2 = 0
        } else if (315 <= r) {
          x1 = 0
          y1 = h - h / 2 * (r - 315) / (360 - 315)
          x2 = w
          y2 = h - y1
        }

        grd = c.createLinearGradient(x1 + x + f, y1 + y, x2 + x + f, y2 + y)
        break
      }
    case 'radial':
      {
        let hw, hh
        let lx, ly

        hw = w / 2
        hh = h / 2

        lx = x + hw + f,
        ly = y + hh

        grd = c.createRadialGradient(lx, ly, 0, lx, ly, hw)
        break
      }
  }

  let pos
  let color

  for (let i in g) {

    pos = i / 100
    color = g[i] || 'transparent'

    if (isNaN(pos)) {
      return
    }

    grd.addColorStop(pos, color)

  }

  return grd

}

/**
 * 
 * @param {*} tw Object text width
 * @param {*} p Gradient direction
 * @param {*} w Object width
 * @param {*} align Text align
 */
getGradient.getTextAxis = function (tw, p, w, align = 'center') {

  let r = 0

  switch (align) {

    case 'left':
      {
        if (p === 'linear') {
          r = tw / 2
        } else {
          r = -(w / 2) + (tw / 2)
        }
        break
      }

    case 'right':
      {
        if (p === 'linear') {
          r = -tw / 2
        } else {
          r = (w / 2) - (tw / 2)
        }
        break
      }

  }

  return r

}


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Number} b Shadow blur
 * @param {String} l Shadow color
 * @param {Number} x Shadow offset X
 * @param {Number} y Shadow offset Y
 */
function setShadow(c, b = 0, l = 'black', x = 0, y = 0) {

  c.shadowBlur = b
  c.shadowColor = l
  c.shadowOffsetX = x
  c.shadowOffsetY = y

}

/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Number} w Object width
 * @param {Number} h Object height
 * @param {Number} x Object axis X
 * @param {Number} y Object axis Y
 * @param {Number} bw Object border width
 * @param {String} l Object border color
 */
function borderSquare(c, w, h, x, y, bw, l) {

  if (!bw) {
    return
  }

  c.strokeStyle = l
  c.lineWidth = bw
  c.beginPath()
  c.strokeRect(x - bw / 2, y - bw / 2, w + bw, h + bw)

}

/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Number} w Object width
 * @param {Number} h Object height
 * @param {Number} x Object axis X
 * @param {Number} y Object axis Y
 * @param {Number} bw Object border width
 * @param {String} l Object border color
 */
function borderCircle(c, w, h, x, y, bw, l) {

  if (!bw) {
    return
  }

  let hw, hh, mx, my

  hw = w / 2
  hh = h / 2
  mx = x + hw
  my = y + hh

  c.strokeStyle = l
  c.lineWidth = bw
  c.beginPath()
  c.ellipse(
    mx,
    my,
    hw + bw / 2,
    hh + bw / 2,
    0, 0,
    Math.PI * 2
  )
  c.stroke()

}

/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {TextInformation} t Object width
 * @param {Number} x Object height
 * @param {Number} y Object axis Y
 */
function borderText(c, t, x, y) {

  text_draw(c, 'strokeText', 'borderColor', t, x, y)

}


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Number} w Object width
 * @param {Number} h Object height
 * @param {Number} x Object axis x
 * @param {Number} y Object axis y
 * @param {Number} r rotate angle
 * @param {Number} rx Center of rotate point (width)
 * @param {Number} rx Center of rotate point (height)
 */
function setRotate(c, w, h, x, y, r = 0, rx = 0.5, ry = 1) {

  let sin, cos

  r = degToRad(r)
  sin = Math.sin(r)
  cos = Math.cos(r)

  // datum points (default: center)
  let tx, ty

  tx = rx * w
  ty = ry * h

  tx += x
  ty += y

  c.setTransform(cos, -sin, sin, cos, tx, ty)

  return {
    x: w * -rx,
    y: h * -ry
  }

}


/**
 * 
 * @param {HTMlCanvasElement} c Canvas context
 * @param {Number} v Blur (pixel)
 */
function setBlur(c, v) {

  c.filter = ~~v ? `blur(${v}px)` : 'none'

}


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Number} v Alpha value (0 ~ 1)
 */
function setAlpha(c, v) {

  c.globalAlpha = v

}


class TextInformation {

  /**
   * @param {String} t Text
   * @param {Number} w Text maxium width
   * @param {Object} o Text option (fontSize, fontFamily, fontWeight, fontStyle, color, borderWidth, borderColor, textAlign, lineHeight)
   */
  constructor(t, w, o) {

    let c
    let tni, tn, tw
    let nw

    o = Object.assign({}, {
      fontSize: 10,
      fontFamily: 'arial',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: '100%',
      color: 'black',
      borderColor: 'black',
      borderWidth: 0
    }, o)

    switch (w < 0) {
      case true:
        c = TextInformation.auto(t, w, o)
        break
      default:
        c = TextInformation.solid(t, w, o)
        break
    }

    tw = []

    tni = TextInformation.getTextNodes(c.ranges, c.breaks, t)
    tn = tni.nodes
    tn.forEach(node => {

      if (!tw[node.line]) {
        tw[node.line] = 0
      }

      tw[node.line] += node.width

    })

    nw = [...tw]
    tw.sort((a, b) => {
      return b - a
    })

    this.width = tw[0]
    this.maxWidth = w >= 0 ? w : this.width
    this.textAlign = o.textAlign || 'left'
    this.color = d3Color.rgb(o.color)
    this.borderColor = d3Color.rgb(o.borderColor)
    this.borderWidth = o.borderWidth
    this.line = c.breaks.length + 1
    this.nodes = tn
    this.nodesWidth = nw
    this.lineHeight = o.lineHeight
    this.height = tni.height
    this.scale = 1

    this.typingInit()

  }

}

TextInformation.prototype.typingInit = function () {

  this.typingset = {
    text: '',
    speed: 0,
    cycle: 0,
    range: 0,
    rangeHidden: 0,
    rangeFade: 0,
    progress: 0,
    duration: 0,
  }

  return this

}

TextInformation.prototype.typing = function (speed = 35, cycle = 1000) {

  this.typingInit()

  this.typingset.speed = speed
  this.typingset.cycle = cycle
  this.typingset.text = [...this.nodes].reverse().map(node => node.text).join('')
  this.typingset.duration = this.typingset.text.length * speed
  this.typingset.range = this.nodesWidth.reduce((a, b) => a + b)
  this.typingset.rangeFade = this.typingset.cycle / this.typingset.duration * this.typingset.range
  this.typingset.rangeHidden = this.typingset.range + 1

  return this

}

TextInformation.prototype.typingUpdate = function (tt = 0) {

  if (!this.typingset.text) {
    return this
  }

  this.typingset.progress += tt
  this.typingset.rangeHidden = this.typingset.range - ((this.typingset.progress / this.typingset.duration) * this.typingset.range)

  return this

}


TextInformation.getTextNodes = (ranges, breaks, text) => {

  let ctx

  let nodes
  let line
  let log

  ctx = document.createElement('canvas').getContext('2d')

  text += ''
  text = text.replace(/\n|<style.*?>|<\/style>/gmi, '')
  nodes = []

  line = breaks.length
  log = 0

  for (const range of ranges) {

    let rBreaks
    let sentence, word
    let start, end
    let width

    start = end = 0

    sentence = text.substring(range.start, range.end)
    rBreaks = breaks.filter(t => (range.start <= t) && (range.end >= t))

    rBreaks.push(log + sentence.length)
    rBreaks.forEach((rBreak, i) => {

      end = rBreak - log
      word = sentence.substr(start, end)
      start += end

      if (!word) {
        return
      }

      if (i) {
        line--
      }

      ctx.font = range.style.fontstyle + ' ' + range.style.fontweight + ' ' + range.style.fontsize + 'px ' + range.style.fontfamily
      width = ctx.measureText(word).width

      nodes.push({
        text: word,
        line: line,
        style: range.style,
        width: width,
        height: 0
      })

      log += end

    })

  }


  /* 
   *  줄간격을 계산합니다.
   *  percentage 방식은 같은 라인에 있는 노드 중에서 가장 큰 fontsize를 가진 노드를 기준으로 계산됩니다.
   *  계산된 결과의 최소값은 해당 라인의 fontsize 와 같습니다.
   * 
   */
  let hs
  let l, fs

  hs = []

  for (let node of nodes) {

    l = node.line

    if (!hs[l]) {
      hs[l] = 0
    }

    fs = TextInformation.getLineHeight(node.style.lineheight, node.style.fontsize)

    if (hs[l] < fs) {
      hs[l] = fs
    }

  }

  hs.forEach((t, i) => {

    for (let node of nodes) {

      if (node.line === i) {
        node.height = t
      }

    }

  })

  l = 0
  nodes.reverse()

  for (let h of hs) l += h
  return {
    nodes,
    height: l
  }

}

TextInformation.getLineHeight = function (v, s) {

  let r

  // percentage value
  if (isNaN(v - 0)) {
    r = s * parseFloat(v) / 100
  }
  // pixel value
  else r = v

  if (r < s) r = s
  return r

}


TextInformation.auto = function (t, w, o) {

  let breaks, ranges
  let width

  breaks = []
  ranges = []
  width = 0


  o = TextInformation.removeUnusefulProperties(o)

  let nodes
  let lastOffset = 0
  let lineWidth = 0

  nodes = TextInformation.getInformation(t, o)
  nodes.forEach(node => {
    let cars

    cars = node.text.split('\n')
    cars.forEach((car, i) => {
      let start
      let end

      start = lastOffset
      end = lastOffset += car.length

      ranges.push({
        start,
        end,
        style: node.style
      })

      if (i < cars.length - 1) {
        breaks.push(end)
      }

      lineWidth = TextInformation.getFromStyle(car, node.style)

      if (width < lineWidth) {
        width = lineWidth
      }
    })
  })

  return {
    width,
    breaks,
    ranges
  }

}

TextInformation.solid = function (t, w, o) {

  let breaks, ranges
  let width

  breaks = []
  ranges = []
  width = w

  o = TextInformation.removeUnusefulProperties(o)

  let lastOffset = 0
  let lastWidth = 0
  let carWidth = 0
  let nodes

  let log = 0

  nodes = TextInformation.getInformation(t, o)
  nodes.forEach((node, i) => {
    let cars
    let start, end

    cars = node.text.split('\n')
    cars.forEach((car, j) => {

      if (!car) {
        return
      }

      if (j > 0) {

        lastWidth = 0
        lastOffset = log

        breaks.push(lastOffset)

      }

      for (let k = 0, len = car.length; k < len; k++) {

        carWidth = TextInformation.getFromStyle(car.charAt(k), node.style)

        if (lastWidth + carWidth > w) {

          lastWidth = 0
          lastOffset = log + k + 1

          if (k + 1 < len) {

            breaks.push(lastOffset)

          }

        } else {

          lastWidth += carWidth

        }

      }

      start = log
      log += car.length
      end = log

      ranges.push({
        start,
        end,
        style: node.style,
      })

    })

  })

  return {
    breaks,
    width,
    ranges
  }

}


TextInformation.getElement = function (t) {
  let e
  e = document.createElement('div')
  e.innerHTML = t
  return Array.from(e.childNodes)
}

TextInformation.getParsedXML = function (t) {
  // Regex to pick out start tag from start of element's HTML.
  let reg = /<style+\b(?:\s+[\w\-.:]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[\w\-.:]+))?)*\s*\/?>/
  let start_tag = t.match(reg)
  start_tag = start_tag ? start_tag[0] : ''

  // Regex to pick out attribute name and (optional) value from start tag.
  let re_attribs = /\s+([\w\-.:]+)(\s*=\s*(?:"([^"]*)"|'([^']*)'|([\w\-.:]+)))?/g
  let attribs = {} // Store attribute name=value pairs in object.
  let match = re_attribs.exec(start_tag)

  while (match != null) {
    let attrib = match[1] // Attribute name in $1.
    let value = match[1] // Assume no value specified.
    if (match[2]) { // If match[2] is set, then attribute has a value.
      value = match[3] ? match[3] : // Attribute value is in $3, $4 or $5.
        match[4] ? match[4] : match[5]
    }
    attribs[attrib] = value
    match = re_attribs.exec(start_tag)
  }

  for (const attrib in attribs) {
    let val
    val = attribs[attrib]
    if (isNaN(val - 0)) {
      continue
    }
    attribs[attrib] = val - 0
  }

  return attribs
}

TextInformation.getInformation = (text, o = {}) => {

  o = Object.assign({}, o)

  for (let i in o) {
    let before = o[i]
    delete o[i]
    o[i.toLowerCase()] = before
  }

  let nodes

  nodes = TextInformation.getElement(text)
  nodes = nodes.map(node => {
    let text
    let style
    text = node.textContent
    switch (node.nodeType) {
      case 1:
        style = TextInformation.getParsedXML(node.outerHTML)
        break
      case 3:
        style = o
        break
    }
    style = Object.assign({}, o, style)
    style.color = d3Color.rgb(style.color)
    style.bordercolor = d3Color.rgb(style.bordercolor)
    return {
      text,
      style
    }
  })

  return nodes
}

TextInformation.getFromStyle = (text, style) => {

  let c

  c = document.createElement('canvas')
  c = c.getContext('2d')
  c.font = style.fontstyle + ' ' + style.fontweight + ' ' + style.fontsize + 'px ' + style.fontfamily

  return c.measureText(text).width

}

TextInformation.removeUnusefulProperties = (style) => {

  let styles

  styles = ['fontsize', 'fontfamily', 'fontweight', 'fontstyle', 'color', 'lineheight', 'borderwidth', 'bordercolor']
  style = Object.assign({}, style)

  for (let i in style) {

    if (styles.indexOf(i.toLowerCase()) === -1) {
      delete style[i]
    }

  }

  return style

}


TextInformation.prototype.setScale = function (s = 1) {

  this.scale = s
  return this

}


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Number} w Object width
 * @param {Number} h Object height
 * @param {String} l Color
 * @param {Number} x Object axis x
 * @param {Number} y Object axis y
 */
function square(c, w, h, l, x, y) {

  let r

  c.fillStyle = l
  c.beginPath()
  c.rect(x, y, w, h)
  c.fill()

}


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Number} w Object width
 * @param {Number} h Object height
 * @param {String} l Color
 * @param {Number} x Object axis x
 * @param {Number} y Object axis y
 * @param {Object} o Option
 */
function circle(c, w, h, l, x, y, o) {

  let hw, hh, mx, my

  hw = w / 2
  hh = h / 2
  mx = x + hw
  my = y + hh

  c.fillStyle = l
  c.beginPath()
  c.ellipse(
    mx,
    my,
    hw,
    hh,
    0, 0,
    Math.PI * 2
  )
  c.fill()

}


function text_draw(c, f, cl, t, rx, ry) {

  let lw
  let s
  let x, y, l, h

  let color, colorTarget
  let {
    rangeHidden,
    rangeFade
  } = t.typingset

  if (!t.nodes[0]) {
    return
  }

  s = t.scale
  x = [...t.nodesWidth]
  y = ry + t.height
  l = 0
  h = t.nodes[0].height

  for (const node of t.nodes) {

    let ln
    let ns, width
    let xx, alignX

    ln = node.line
    width = t.nodesWidth[node.line] * s
    ns = node.style

    x[ln] -= node.width
    xx = rx
    xx += x[ln] * s
    alignX = 0

    switch (t.textAlign) {

      case 'left':
        alignX = 0
        break

      case 'center':
        alignX = node.width * s / 2
        xx += (t.maxWidth / 2) - (width / 2) + (node.width * s / 2)
        break

      case 'right':
        alignX = node.width * s
        xx += t.maxWidth - width + (node.width * s)
        break

    }

    if (l !== node.line) {
      y -= (h * s)
      l = node.line
      h = node.height
    }


    colorTarget = node.style[cl.toLowerCase()] || t[cl]


    if (t.typingset.speed) {

      let grdWidth
      let grdX
      let grdColor

      grdWidth = rangeFade * s

      grdX = xx - grdWidth
      grdX += ((node.width - rangeHidden) * s)
      grdX -= alignX

      grdColor = node.style[cl.toLowerCase()] || t[cl]

      color = c.createLinearGradient(grdX, y, grdX + grdWidth, y)
      color.addColorStop(0, `rgba(${grdColor.r}, ${grdColor.g}, ${grdColor.b}, ${grdColor.opacity})`)
      color.addColorStop(1, `rgba(${grdColor.r}, ${grdColor.g}, ${grdColor.b}, ${0})`)

      rangeHidden -= node.width

    } else {

      color = node.style[cl.toLowerCase()] || t[cl]
      color = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.opacity})`

    }


    let strokeStyle
    let fillStyle
    let lineWidth

    lineWidth = node.style.borderwidth || t.borderWidth

    switch (cl) {

      case 'borderColor':
        strokeStyle = color
        fillStyle = 'transparent'

        if (!lineWidth) continue
        break

      case 'color':
        strokeStyle = 'transparent'
        fillStyle = color
        break

    }


    c.textAlign = t.textAlign
    c.font = ns.fontstyle + ' ' + ns.fontweight + ' ' + ns.fontsize * s + 'px ' + ns.fontfamily
    c.strokeStyle = strokeStyle
    c.fillStyle = fillStyle
    c.lineWidth = lineWidth

    c[f](node.text, xx, y)

  }

}


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {TextInformation} t Text node Information
 * @param {Number} x Object axis x
 * @param {Number} y Object axis y
 * 
 */
function text(c, t, x, y) {

  c.lineJoin = 'round'
  text_draw(c, 'fillText', 'color', t, x, y)

}


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {HTMLImageElement} m Image Object
 * @param {Number} w Object width
 * @param {Number} h Object height
 * @param {Number} x Object axis x
 * @param {Number} y Object axis y
 * @param {Number} rx x axis of clipped image
 * @param {Number} ry y axis of clipped image
 * @param {Number} cw Object width of the clipped image
 * @param {Number} ch Object width of the clipped image
 */
function image(c, m, w, h, x, y, rx = 0, ry = 0, cw = w, ch = h) {

  c.beginPath()
  c.fill()
  c.drawImage(m, rx, ry, cw, ch, x, y, w, h)

}



export {
  getGradient,
  setRotate,
  setAlpha,
  setBlur,
  borderCircle,
  borderSquare,
  borderText,
  setShadow,
  TextInformation,
  square,
  circle,
  text,
  image
}