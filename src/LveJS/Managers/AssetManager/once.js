export default function once(e, f) {

  return this.setCallback(e, f, 1)

}