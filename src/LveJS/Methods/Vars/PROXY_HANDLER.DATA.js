let handler


handler = {}
handler.__getter = null
handler.__observer = function (p, v, t) {

  this.emit('datamodified', {

    property: p,
    value: v

  })

}

export default handler