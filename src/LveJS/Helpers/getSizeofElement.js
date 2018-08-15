import DEFAULT_STYLE from '../Objects/Vars/DEFAULT_STYLE';


const Symbols = {

  NUMBER: Symbol('NUMBER'),
  PERCENTAGE: Symbol('PERCENTAGE'),
  AUTO: Symbol('AUTO')

};


function getValueType(v) {

  let r;

  if (typeof v === 'number') {
    r = Symbols.NUMBER;
  } else if (v.substr(-1) === '%') {
    r = Symbols.PERCENTAGE
  } else {
    r = Symbols.AUTO;
  }

  return r;

}


function getPercentageValue(v, vo) {

  return parseFloat(v) / 100 * vo;

}

/**
 * 
 * @param {HTMLElement} t Target Element
 * @param {String|Number} w Element width
 * @param {String|Number} h Element height
 * @param {Number} vw Viewport width
 * @param {Number} vh Viewport height
 */
function getSizeofElement(t, w, h, vw, vh) {

  let nw, nh, s;
  let d, r;

  d = new DEFAULT_STYLE;

  nw = d.width;
  nh = d.height;
  s = nw / nh;

  r = {};

  switch (t.nodeName) {

    case 'IMG':
      nw = t.naturalWidth;
      nh = t.naturalHeight;
      s = nw / nh;
      break;

  }

  switch (getValueType(w)) {

    case Symbols.AUTO:

      switch (getValueType(h)) {

        case Symbols.AUTO:
          r.height = nh;
          r.width = nw;
          return r;

        case Symbols.PERCENTAGE:
          r.height = getPercentageValue(h, vh);
          r.width = r.height * s;
          return r;

        case Symbols.NUMBER:
          r.height = h;
          r.width = r.height * s;
          return r;

      }

      break;

    case Symbols.PERCENTAGE:
      r.width = getPercentageValue(w, vw);
      break;

    case Symbols.NUMBER:
      r.width = w;
      break;

  }


  // height 계산하기
  switch (getValueType(h)) {

    case Symbols.AUTO:
      r.height = r.width / s;
      break;

    case Symbols.PERCENTAGE:
      r.height = getPercentageValue(h, vh);
      break;

    case Symbols.NUMBER:
      r.height = h;
      break;

  }

  return r;

};


export default getSizeofElement;