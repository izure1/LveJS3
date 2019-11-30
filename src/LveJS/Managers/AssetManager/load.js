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

    let resolvedSrc = this.getResolvedURL(src)

    if (this.map.has(src)) {
      loaded.call(this, resolvedSrc, this.map.get(resolvedSrc), resolve, cb)
      return
    }

    if (this.loading.has(resolvedSrc)) {
      resolve(null)
      return
    }


    let self
    self = this
    self.loading.add(resolvedSrc)

    let xml
    xml = new XMLHttpRequest
    xml.open('GET', resolvedSrc)
    xml.setRequestHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    xml.onload = function (e) {

      if (this.status !== 200) {
        loaded.call(self, resolvedSrc, this.response, resolve, cb)
        return
      }

      loaded.call(self, resolvedSrc, this.response, resolve, cb)

    }
    xml.onabort = xml.onerror = function (e) {
      loaded.call(self, resolvedSrc, null, null, resolve, cb)
    }
    xml.responseType = 'blob'
    xml.send(null)

  })

}