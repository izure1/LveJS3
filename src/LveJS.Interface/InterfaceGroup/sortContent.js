export default function sortContent() {

  this.object = Array.from(this.object)
  this.object.sort((a, b) => {

    let n

    a = a[1]
    b = b[1]

    n = b.style.perspective - a.style.perspective

    if (!n) {
      n = a.style.zIndex - b.style.zIndex
    }

    return n

  })

  this.object = new Map(this.object)

}