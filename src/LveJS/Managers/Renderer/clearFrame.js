export default function clearFrame(cl) {

  let c;
  let w, h;

  c = this.setting.canvas.context;

  w = c.canvas.width;
  h = c.canvas.height;

  c.globalAlpha = 1;
  c.fillStyle = cl;

  c.beginPath();
  c.clearRect(0, 0, w, h);
  c.fillRect(0, 0, w, h);

};