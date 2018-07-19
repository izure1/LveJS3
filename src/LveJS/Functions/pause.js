export default function pause() {

  this.renderer.setting.isRunning = false;
  return this;

};