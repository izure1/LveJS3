export default function init(o = {}) {

  for (let p in o) {
    this.setting[p] = o[p]
  }

}