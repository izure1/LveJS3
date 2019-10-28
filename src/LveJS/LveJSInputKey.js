class LveJSInputKey {

  constructor(keyCode, inputManager) {
    this.inputManager = inputManager
    this.keyCode = keyCode
  }

  get isDown() {
    return this.inputManager.isDown(this.keyCode)
  }

}


export default LveJSInputKey