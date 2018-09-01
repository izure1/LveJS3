let handler;

handler = {};
handler.ended = function () {

  if (this.loop) {
    this.spriteset.current = 0;
    this.play();
  }

};


export default handler;