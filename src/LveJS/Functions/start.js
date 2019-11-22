export default function start(f) {

  this.worldReady.wait(f)
  return this.lve

}