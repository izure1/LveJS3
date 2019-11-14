/**
 * 
 * @param {String} name  Sprite name
 * @param {String} src  Sprite asset source
 * @param {Object} option Sprite options (fps, frame, start, end)
 * @description
 * Generate sprite information based on this src. The generated sprite information can be used with the name you specify.
 */
export default function createSprite(name, src, option) {
  
  option.elementSrc = this.lve.getAsset(src) || src
  return this.spriteManager.create(name, src, option)

}