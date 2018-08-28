/**
 * 
 * @param {String} u Method name
 * @param {Function} f Method function
 */
export default function extend(u, f) {

  window.LVE.classes.LveJSObjectSession.prototype[u] = f;
  return this.lve;

};