export default function sortObject() {

  let n;
  this.objects.sort((a, b) => {

    n = a.style.perspective - b.style.perspective;

    if (!n) {
      n = b.style.zIndex - a.style.zIndex;
    }

    return n;

  });

  //lve.root.fn.updatePhysicsPerspective();

};