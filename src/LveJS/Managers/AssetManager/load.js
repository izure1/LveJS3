import LveJSAsset from '../../LveJSAsset'


function loaded(resolveSrc, response, resolve, cb) {

  this.loading.delete(resolveSrc)

  if (response !== null) {

    let asset

    if (response instanceof LveJSAsset) {
      asset = response
    } else {
      asset = new LveJSAsset
      asset.setName(resolveSrc)
      asset.setURL(URL.createObjectURL(response))
      asset.setBlob(response)
    }

    this.map.set(asset.getName(), asset)
    this.emit('load')

    resolve(asset)
    cb(asset.getName(), asset.getURL(), this.map.size, this.map.size + this.loading.size)

  }

  if (this.isReady()) {
    this.emit('finish')
  }

}


export default function load(src, cb = function () {}) {

  return new Promise(resolve => {

    if (src instanceof LveJSAsset) {
      loaded.call(this, src.getName(), src, resolve, cb)
      return
    }

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