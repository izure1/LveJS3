import {
  degToRad
} from '../Utils/math';

function getGradient() {

}

function degToRad(d) {
  return d * Math.PI / 180;
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

  let sin, cos;

  r = degToRad(r);
  sin = Math.sin(r);
  cos = Math.cos(r);

  // datum points (default: center)
  let tx, ty;

  tx = rx * w;
  ty = ry * h;

  tx += x;
  ty += y;

  c.setTransform(cos, sin, -sin, cos, tx, ty);

  return {
    x: w * -rx,
    y: h * -ry
  }

}


class TextInformation {

  /**
   * @param {String} t Text
   * @param {Number} w Text maxium width
   * @param {Number} h Text line height
   * @param {Object} o Option
   */
  constructor(t, w, h, o) {

    let c;
    let tn, tw;

    switch (w) {
      case 0:
        c = TextInformation.auto(t, o);
        break;
      default:
        c = TextInformation.solid(t, o);
        break;
    }

    tw = [];

    tn = TextInformation.getTextNodes(c.ranges, c.breaks, t);
    tn.forEach(node => {

      if (!tw[node.line]) {
        tw[node.line] = 0;
      }

      tw[node.line] += node.width;

    });

    tw.sort((a, b) => {
      return b - a;
    });

    this.width = tw[0];
    this.height = c.breaks.length + 1 * h;
    this.line = c.breaks.length + 1;
    this.nodes = tn;

  }

}


TextInformation.getTextNodes = (ranges, breaks, text) => {

  let ctx;

  let nodes;
  let line;
  let log;

  ctx = document.createElement('canvas').getContext('2d');

  text += '';
  text = text.replace(/\n|<style.*?>|<\/style>/gmi, '');
  nodes = [];

  line = breaks.length;
  log = 0;

  for (const range of ranges) {

    let rBreaks;
    let sentence, word;
    let start, end;
    let width;

    start = end = 0;

    sentence = text.substring(range.start, range.end);
    rBreaks = breaks.filter(t => (range.start <= t) && (range.end >= t));

    rBreaks.push(log + sentence.length);
    rBreaks.forEach((rBreak, i) => {

      end = rBreak - log;
      word = sentence.substr(start, end);
      start += end;

      if (!word) {
        return;
      }

      if (i) {
        line--;
      }

      ctx.font = range.style.fontstyle + ' ' + range.style.fontweight + ' ' + range.style.fontsize + 'px ' + range.style.fontfamily;
      width = ctx.measureText(word).width;

      nodes.push({
        text: word,
        line: line,
        style: range.style,
        width: width,
      });

      log += end;

    });

  }


  return nodes;

};


TextInformation.auto = function (t, o) {

  let breaks, ranges;
  let width;

  breaks = [];
  ranges = [];
  width = 0;


  o = TextInformation.removeUnusefulProperties(o);

  let nodes;
  let lastOffset = 0;
  let lineWidth = 0;

  nodes = TextInformation.getInformation(t, o);
  nodes.forEach(node => {
    let cars;

    cars = node.text.split('\n');
    cars.forEach((car, i) => {
      let start;
      let end;

      start = lastOffset;
      end = lastOffset += car.length;

      ranges.push({
        start,
        end,
        style: node.style
      });

      if (i < cars.length - 1) {
        breaks.push(end);
      }

      lineWidth = TextInformation.getFromStyle(car, node.style);

      if (width < lineWidth) {
        width = lineWidth;
      }
    });
  });

  return {
    width,
    breaks,
    ranges
  }

};

TextInformation.solid = function (t, o) {

  let breaks, ranges;
  let width;

  breaks = [];
  ranges = [];
  width = o.width;

  o = TextInformation.removeUnusefulProperties(o);

  let lastOffset = 0;
  let lastWidth = 0;
  let carWidth = 0;
  let nodes;

  let log = 0;

  nodes = TextInformation.getInformation(t, o);
  nodes.forEach((node, i) => {
    let cars;
    let start, end;

    cars = node.text.split('\n');
    cars.forEach((car, j) => {

      if (!car) {
        return;
      }

      if (j > 0) {

        lastWidth = 0;
        lastOffset = log;

        breaks.push(lastOffset);

      }

      for (let k = 0, len = car.length; k < len; k++) {

        carWidth = TextInformation.getFromStyle(car.charAt(k), node.style);

        if (lastWidth + carWidth > width) {

          lastWidth = 0;
          lastOffset = log + k + 1;

          if (k + 1 < len) {

            breaks.push(lastOffset);

          }

        } else {

          lastWidth += carWidth;

        }

      }

      start = log;
      log += car.length;
      end = log;

      ranges.push({
        start,
        end,
        style: node.style,
      });

    });

  });

  return {
    breaks,
    width,
    ranges
  }

};


TextInformation.getElement = function (t) {
  let e;
  e = document.createElement('div');
  e.innerHTML = t;
  return Array.from(e.childNodes);
};

TextInformation.getParsedXML = function (t) {
  // Regex to pick out start tag from start of element's HTML.
  let reg = /<style+\b(?:\s+[\w\-.:]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[\w\-.:]+))?)*\s*\/?>/;
  let start_tag = t.match(reg);
  start_tag = start_tag ? start_tag[0] : '';

  // Regex to pick out attribute name and (optional) value from start tag.
  let re_attribs = /\s+([\w\-.:]+)(\s*=\s*(?:"([^"]*)"|'([^']*)'|([\w\-.:]+)))?/g;
  let attribs = {}; // Store attribute name=value pairs in object.
  let match = re_attribs.exec(start_tag);

  while (match != null) {
    let attrib = match[1]; // Attribute name in $1.
    let value = match[1]; // Assume no value specified.
    if (match[2]) { // If match[2] is set, then attribute has a value.
      value = match[3] ? match[3] : // Attribute value is in $3, $4 or $5.
        match[4] ? match[4] : match[5];
    }
    attribs[attrib] = value;
    match = re_attribs.exec(start_tag);
  }

  for (const attrib in attribs) {
    let val;
    val = attribs[attrib];
    if (isNaN(val - 0)) {
      continue;
    }
    attribs[attrib] = val - 0;
  }

  return attribs;
};

TextInformation.getInformation = (text, defaultStyle = {}) => {

  defaultStyle = Object.assign({}, defaultStyle);
  defaultStyle.color = null;

  for (let i in defaultStyle) {
    let before = defaultStyle[i];
    delete defaultStyle[i];
    defaultStyle[i.toLowerCase()] = before;
  }

  let nodes;

  nodes = TextInformation.getElement(text);
  nodes = nodes.map(node => {
    let text;
    let style;
    text = node.textContent;
    switch (node.nodeType) {
      case 1:
        style = TextInformation.getParsedXML(node.outerHTML);
        break;
      case 3:
        style = defaultStyle;
        break;
    }
    style = Object.assign({}, defaultStyle, style);
    return {
      text,
      style
    }
  });

  return nodes;
};

TextInformation.getFromStyle = (text, style) => {
  let c = document.createElement('canvas');
  c = c.getContext('2d');
  c.font = style.fontstyle + ' ' + style.fontweight + ' ' + style.fontsize + 'px ' + style.fontfamily;
  return c.measureText(text).width;
};

TextInformation.removeUnusefulProperties = (style) => {
  const styles = ['fontsize', 'fontfamily', 'fontweight', 'fontstyle', 'color'];
  style = Object.assign({}, style);
  for (let i in style) {
    if (styles.indexOf(i.toLowerCase()) === -1) {
      delete style[i];
    }
  }
  return style;
};


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Number} x Object axis x
 * @param {Number} y Object axis y
 * @param {Object} o Option
 */
function square(c, x, y, o) {

  let fillColor;
  let r;

  c.beginPath();

  if (o.shadowBlur) {
    c.shadowColor = o.shadowColor;
    c.shadowBlur = o.shadowBlur;
    c.shadowOffsetX = o.shadowOffsetX;
    c.shadowOffsetY = o.shadowOffsetY;
  }
  if (o.borderWidth) {
    c.strokeStyle = o.borderColor;
    c.lineWidth = o.borderWidth;
    c.rect(o.left, o.bottom, o.width + o.borderWidth, o.height + o.borderWidth);
    c.stroke();
  }

  fillColor = o.gradient.__length ? getGradient(this, c, o.opacity, x, y) : o.color;
  c.fillStyle = fillColor;

  c.rect(x, y, o.width, o.height);
  c.fill();

}


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {Number} x Object axis x
 * @param {Number} y Object axis y
 * @param {Object} o Option
 */
function circle(c, x, y, o) {

  let fillColor;
  let hw, hh, mx, my;

  hw = o.width / 2;
  hh = o.height / 2;
  mx = x + hw;
  my = y + hh;

  if (style.shadowBlur) {
    c.shadowColor = o.shadowColor;
    c.shadowBlur = o.shadowBlur;
    c.shadowOffsetX = o.shadowOffsetX;
    c.shadowOffsetY = o.shadowOffsetY;
  }
  if (style.borderWidth) {
    c.strokeStyle = o.borderColor;
    c.lineWidth = o.borderWidth;
    c.ellipse(
      mx,
      my,
      hw + o.borderWidth / 2,
      hh + o.borderWidth / 2,
      0, 0,
      Math.PI * 2
    );
    c.stroke();
  }

  fillColor = o.gradient.__length ? getGradient(this, c, o.opacity, x, y) : o.color;

  c.fillStyle = fillColor;
  c.beginPath();
  c.ellipse(
    mx,
    my,
    hw,
    hh,
    0, 0,
    Math.PI * 2
  );
  c.fill();

}


function text_draw(c, f, t, x, y, o) {

  let lw;

  lw = [];

  x = [];
  y = ry + o.height;
  f = c[f];

  if (!t.nodes[0]) {
    return;
  }

  x.length = t.nodes[0].line + 1;
  x.fill(0);


  for (const node of t.nodes) {

    if (!lw[node.line]) {
      lw[node.line] = 0;
    }

    lw[node.line] += node.width;

  }


  for (const node of t.nodes) {

    let ln;
    let ns, width;
    let xx, yy;

    ln = node.line;
    width = lw[node.line] * o.scale;
    ns = node.style;

    xx = rx;
    xx += x[ln] * o.scale;
    x[ln] += node.width;

    switch (o.textAlign) {
      case 'center':
        {
          xx += (relative.width / 2) - (width / 2) + (node.width * o.scale / 2);
          break;
        }
      case 'right':
        {
          xx += relative.width - width + (node.width * o.scale);
          break;
        }
    }

    xx = xx;
    yy = (y - (node.line * lineHeight));

    c.textAlign = o.textAlign;
    c.font = ns.fontstyle + ' ' + ns.fontweight + ' ' + (ns.fontsize * o.scale) + 'px ' + ns.fontfamily;
    c.fillStyle = ns.color || color;
    
    f(node.text, xx, yy);

  }

}


/**
 * 
 * @param {HTMLCanvasElement} c Canvas context
 * @param {TextInformation} t Text node Information
 * @param {Number} x Object axis x
 * @param {Number} y Object axis y
 * @param {Object} o Option
 */
function text(c, t, x, y, o) {

  let fillColor;
  let left;

  fillColor = o.gradient.__length ? getGradient(this, c, o.opacity, x, y) : o.color;
  c.lineJoin = 'round';

  if (o.shadowBlur) {
    c.shadowColor = o.shadowColor;
    c.shadowBlur = o.shadowBlur;
    c.shadowOffsetX = o.shadowOffsetX;
    c.shadowOffsetY = o.shadowOffsetY;
  }

  if (o.borderWidth) {
    c.strokeStyle = o.borderColor;
    c.lineWidth = o.borderWidth;
    text_draw(c, 'strokeText', t, x, y, o);
  }

  text_draw(c, 'fillText', t, x, y, o);

}



export {
  getGradient,
  setRotate,
  TextInformation,
  square,
  circle,
  text
};