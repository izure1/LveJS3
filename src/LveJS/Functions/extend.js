/**
 * 
 * @param {String} u Method name
 * @param {Function} f Method function
 * @description
 * Adds a new method to an object
 */
export default function extend(u, f) {

  this.classes.LveJSObjectSession.prototype[u] = f
  return this.lve

}