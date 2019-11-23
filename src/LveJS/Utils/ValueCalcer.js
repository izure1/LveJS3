class ValueCalcer {

  constructor() {
    this.properties = new Map
    this.exports = new Map
  }

  __update() {

    for (let [section, exp] of this.exports.entries()) {

      let v = 1
      let prop = exp[0]
      let props = exp[1]

      for (let p of props) {

        if (!this.properties.has(p)) {
          continue
        }

        v *= this.properties.get(p)

      }

      section[prop] = v

    }

  }

  set(prop, val) {
    this.properties.set(prop, val)
    this.__update()
    return this
  }

  export (obj, prop, properties) {
    this.exports.set(obj, [prop, properties])
    this.__update()
    return this
  }

}


export default ValueCalcer