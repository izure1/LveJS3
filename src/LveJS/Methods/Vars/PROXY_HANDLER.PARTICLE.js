let handler

handler = {}
handler.__getter = {}

handler.__observer = function (p, v, t) {

  this.emit('particlemodified', {
    property: p,
    value: v,
  })

}

export default handler