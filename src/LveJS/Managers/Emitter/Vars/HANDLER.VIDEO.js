let handler;

handler = {};
handler.ended = function () {

  if (this.loop) {
    this.element.currentTime = 0;
    this.play();
  }

};


export default handler;