/**
 * 
 * @param {HTMLElement} el Target element
 * @param {MouseEvent} e MouseEvent Object
 */
export default function getOffset(el, e) {

  let o;
  let x, y;

  o = el.getBoundingClientRect();
  x = e.clientX;
  y = e.clientY;

  x -= o.x;
  y -= o.y;

  return {
    x,
    y
  };

};