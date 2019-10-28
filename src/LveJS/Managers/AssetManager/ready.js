export default function ready() {

  return new Promise(resolve => {

    if (this.isReady()) {
      resolve()
      return this
    }

    this.once('finish', resolve)

  })

}