import getProperties from './Utils/getProperties'


function LveJSMouseEvent(e, c) {

  let s1, s2
  let r

  s1 = c.changedTouches ? c.changedTouches[0] : {}
  s1 = getProperties.call(s1)
  s2 = getProperties.call(c)

  r = new MouseEvent(e, {
    ...s1,
    ...s2
  })

  Object.defineProperties(r, {
    target: {
      value: c.target,
      enumerable: true
    },
    which: {
      value: c.which || 1,
      enumerable: true
    }
  })

  return r

}


export default LveJSMouseEvent