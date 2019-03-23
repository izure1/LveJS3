export default function __followUpdate(p, v) {

  let t

  if (p in this.followset.position) {
    t = this.followset.position[p]
    this.style[p] = t + v
  }
  
  return this

}