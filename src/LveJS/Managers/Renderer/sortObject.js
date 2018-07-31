export default function sortObject() {

  let n;
  this.objects.sort((a, b) => {

    n = b.style.perspective - a.style.perspective;

    if (!n) {
      n = a.style.zIndex - b.style.zIndex;
    }

    return n;

  });

  //lve.root.fn.updatePhysicsPerspective();

};