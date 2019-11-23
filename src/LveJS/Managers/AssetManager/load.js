import path from 'path'


function loaded(resolveSrc, response, resolve, cb) {

  this.loading.delete(resolveSrc)

  if (response !== null) {

    response.blobURL = URL.createObjectURL(response)

    this.map.set(resolveSrc, response)
    this.emit('load')
    
    resolve(response)
    cb(resolveSrc, response.blobURL)

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
        loaded.call(self, resolveSrc, this.response, resolve, cb)
        return
      }

      loaded.call(self, resolveSrc, this.response, resolve, cb)

    }
    xml.onabort = xml.onerror = function (e) {
      loaded.call(self, resolveSrc, null, null, resolve, cb)
    }
    xml.responseType = 'blob'
    xml.send(null)

  })

}