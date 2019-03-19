/**
 * @param {Object} o setting object properties
 * @returns {Object} Renderer
 */
export default function init(o) {

  Object.assign(this.setting, o)
  return this

}