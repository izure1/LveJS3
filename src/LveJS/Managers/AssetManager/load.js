function loaded(src, blob, resolve, cb) {

  this.loading.delete(src)
  this.map.set(src, blob)

  resolve(blob)
  cb(src, blob)

}


export default function load(src, cb = function () {}) {

  return new Promise((resolve, reject) => {

    let xml, blob
    let self

    this.loading.add(src)

    if (this.map.has(src)) {

      loaded.call(this, src, this.map.get(src), resolve, cb)
      return

    }

    self = this

    xml = new XMLHttpRequest
    xml.open('GET', src, true)
    xml.onload = function (e) {

      blob = this.response
      blob = URL.createObjectURL(blob)

      loaded.call(self, src, blob, resolve, cb)

    }
    xml.onerror = reject
    xml.responseType = 'blob'
    xml.send(null)

  })

}