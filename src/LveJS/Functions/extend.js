/**
 * 
 * @param {String} u Method name
 * @param {Function} f Method function
 */
export default function extend(u, f) {

  this.classes.LveJSObjectSession.prototype[u] = f
  return this.lve

}