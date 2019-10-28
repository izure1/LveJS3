import domReady from '../Utils/domReady'


/**
 * 
 * @param {Function} f  Callback function
 * @description
 * When a document is loaded, so LveJS can perform normally, the function passed to the parameter will call. If you are loading assets as a 'loadAsset' function, callback function will work after that.
 */
export default function ready(f) {

  domReady.call(document, () => {
    this.assetManager.ready().then(f)
  })

  return this.lve

}