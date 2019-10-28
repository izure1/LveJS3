import path from 'path'


function loaded(resolveSrc, blob, resolve, cb) {

  this.loading.delete(resolveSrc)

  if (blob !== null) {

    this.map.set(resolveSrc, blob)
    this.emit('load')
    
    resolve(blob)
    cb(resolveSrc, blob)

  }

  if (this.isReady()) {
    this.emit('finish')
  }

}


export default function load(src, cb = function () {}) {

  return new Promise(resolve => {

    let xml, resolveSrc, blob
    let self

    resolveSrc = path.resolve(src)

    if (this.map.has(resolveSrc)) {
      loaded.call(this, resolveSrc, this.map.get(resolveSrc), resolve, cb)
      return
    }

    if (this.loading.has(resolveSrc)) {
      resolve(null)
      return
    }


    self = this
    self.loading.add(resolveSrc)

    xml = new XMLHttpRequest
    xml.open('GET', src)
    xml.setRequestHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    xml.onload = function (e) {

      if (this.status !== 200) {
        loaded.call(self, resolveSrc, null, resolve, cb)
        return
      }

      blob = this.response
      blob = URL.createObjectURL(blob)

      loaded.call(self, resolveSrc, blob, resolve, cb)

    }
    xml.onabort = xml.onerror = function (e) {
      loaded.call(self, resolveSrc, null, resolve, cb)
    }
    xml.responseType = 'blob'
    xml.send(null)

  })

}