export default function pause() {

  this.renderer.isRunning = false;
  return this;

};