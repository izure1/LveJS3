let handler


handler = {}
handler.__getter = null
handler.__observer = function (p, v, t) {

  this.emit('followmodified', {

    property: p,
    value: v

  })

}

export default handler