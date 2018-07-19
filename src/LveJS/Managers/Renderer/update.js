export default function update(tt = 0) {

  for (let t of this.objects) {

    t.__animationUpdate();
    t.__draw();

  }

};