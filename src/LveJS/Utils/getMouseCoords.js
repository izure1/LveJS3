/**
 * 
 * @param {HTMLElement} el Target element
 * @param {MouseEvent} e MouseEvent Object
 */
export default function getMouseCoords(el, e) {

  let offset
  let x, y

  offset = el.getBoundingClientRect()

  x = e.clientX
  y = e.clientY

  x -= offset.left
  y -= offset.top

  x = ~~x
  y = ~~y

  return {
    x,
    y,
    offset
  }

}