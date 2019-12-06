export default function onUpdate(f) {

  this.lockRelease.wait(f)
  return this

}